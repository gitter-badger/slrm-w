# SLURM WEBOVERVIEW

### Please note that this project is currently in beta!

#### Build Status
[![Build Status](https://img.shields.io/travis/FlonTaut/slrm-w.svg?style=flat-square)](https://travis-ci.com/FlonTaut/slrm-w)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) 
[![Greenkeeper badge](https://badges.greenkeeper.io/FlonTaut/slrm-w.svg)](https://greenkeeper.io/) [![Join the chat at https://gitter.im/slrm-w/Lobby](https://badges.gitter.im/slrm-w/Lobby.svg)](https://gitter.im/slrm-w/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![Preview](https://github.com/FlonTaut/slrm-w/raw/master/res/preview.png "Preview")

## Installing
#### Create an export script

On your host machine. 
```bash
touch export_queue.sh (can be any name)
```
Add the following lines
```bash
#!/bin/bash
squeue -o %i,%j,%u,%N,%C,%V,%T,%r > /home/USERNAME/slrm-w/squeue_text
```
Or use the sample script in <b>scripts</b> folder

Paramters need to be seperated by comma ```,``` or you need to update the ```config.app.squeue.seperator``` value in ```config.js```

#### Create a cron job
Decide how often you want the overview to be refreshed and then create a cron job.
```
# crontab -e
0,15,30,45 * * * * /home/USERNAME/export_queue.sh
```
This cronjob is executed every 15 minutes at 0,15,30,45.
### Install with NodeJs

Download and switch into the project
```
git clone https://github.com/FlonTaut/slrm-w && cd slrm-w
```
```javascript
npm install
npm start
```
Open ```http://localhost:3000``` in your Browser.

### Nodesjs Production
To run Slurm Overview in production we recommend using <b>pm2</b>

Install <b>pm2</b> globally with ```npm i -g pm2```

Add the following on top of index.js
```
#!/usr/bin/env nodejs
```
Run index.js with <b>pm2</b>
```
pm2 start index.js
```
You can find a full guide for Ubuntu [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)


### Using Docker (planned for 1.0)

Pull the docker image from dockerhub and then run it with the following command

```docker
docker pull flontaut/slrm-w
docker run -p 8080:3000 --restart=always -d --mount type=bind,source="$(pwd)"/slrm-w,target=/usr/src/slrm-w/out -it flontaut/slrm-w -v
```

The Path ```source="$(pwd)"/slrm-w``` needs to fit your enviroment.

In this folder the output of the ```squeue``` export command.



### Customizing
#### Customize the shown data (slurm jobs)
You need to update your export script you created earlier.

Al list of all available parameters can be found [here](http://geco.mines.edu/prototype/How_do_I_manage_jobs/squeue.html)

#### Customize the app
The listening port is defined in ```app/config.js```

Please note that you will need to update your ```docker run -p``` command if you change the port.

<b>Currently no support can be provided if you customize the project!</b>

### Contributing
Every contribution is welcome.
For now, please clone the Repo and only create pull requests for issues marked with the <b>[help wanted](https://github.com/FlonTaut/slrm-w/labels/help%20wanted)</b> label.

A complete contribution guide will be added soon!

### License
Copyright 2018 - Florian Taut

slrm-w itself is licensed under the MIT license.

Some node modules are licensed under other free software license.
