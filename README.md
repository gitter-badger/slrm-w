# SLURM WEBOVERVIEW

### Please note that this project is currently in beta!

#### Build Status
[![Build Status](https://travis-ci.com/FlonTaut/slrm-w.svg?branch=master)](https://travis-ci.com/FlonTaut/slrm-w)
[![Maintainability](https://api.codeclimate.com/v1/badges/1e3810dfcafddb91cb6e/maintainability)](https://codeclimate.com/github/FlonTaut/slrm-w/maintainability)

![Preview](https://github.com/FlonTaut/slrm-w/raw/master/res/preview.png "Preview")

## Installing
### Using NodeJs

Download the project
```
git clone https://github.com/FlonTaut/slrm-w
```
and switch to the directory with ```cd slrm-w ```

```javascript
npm install
npm start
```

### Production
To run Slurm Overview in production we recommend using <b>pm2</b>

Install <b>pm2</b> globally with ```npm i -g pm2``` (requires sudo privileges)

Add the following on top of index.js
```
#!/usr/bin/env nodejs
```
Run index.js with <b>pm2</b>
```
pm2 start index.js
```
You can find a full guide [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)


### Using Docker (not working yet 2018-06-06)

Pull the docker image from dockerhub and then run it with the following command

```docker
docker pull flontaut/slrm-w
docker run -p 8080:3000 --restart=always -d --mount type=bind,source="$(pwd)"/slrm-w,target=/usr/src/slrm-w/out -it flontaut/slrm-w -v
```

The Path ```source="$(pwd)"/slrm-w``` needs to fit your enviroment.

In this folder the output of the ```squeue```export command.

#### Creating an export script

On your host machine.
```bash
touch export_queue.sh
```
Add the following or similar to it:
```bash
#!/bin/bash
squeue -o %i,%j,%u,%N,%C,%V,%T,%r > /home/USERNAME/slrm-w/squeue_text
```
Paramters need to be seperated by comma ```,``` or ```index.js``` line ```24``` needs to be updated.

#### Creating a cron job
Decide how often you want the overview to be refreshed and then create a cron job.
```
# crontab -e
0,15,30,45 * * * * /home/USERNAME/export_queue.sh
```


### Customizing
#### Customize the squeue output
You need to update the ```export_queue.sh``` script from your users folder.
Al list of all available parameters can be found [here](http://geco.mines.edu/prototype/How_do_I_manage_jobs/squeue.html)

#### Customizing
The listening port is defined in ```app/config.js```

Please note that you will need to update your ```docker run -p``` command if you change the port.

<b>Currently no support can be provided if you customize the project!</b>

### Contributing and Bug Reports
Every contribution is welcome.
For now, please clone the Repo and only create pull requests for issues marked with the <b>[help wanted](https://github.com/FlonTaut/slrm-w/labels/help%20wanted)</b> label.

A complete contribution guide will be added soon!

### License
Copyright 2018 - Florian Taut
slrm-w itself is licensed under the MIT license.

Some node modules are licensed under other free software license.
