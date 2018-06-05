# SLURM WEBOVERVIEW

### Please note that this project is currently in beta!

#### Build Status
[![Build Status](https://travis-ci.com/FlonTaut/slrm-w.svg?branch=master)](https://travis-ci.com/FlonTaut/slrm-w)
[![Maintainability](https://api.codeclimate.com/v1/badges/1e3810dfcafddb91cb6e/maintainability)](https://codeclimate.com/github/FlonTaut/slrm-w/maintainability)

![Preview](https://github.com/FlonTaut/slrm-w/blob/master/res/preview_dark_v2.png?raw=true "Preview")

## Installing
### Using NodeJs
Download the project and switch to the directory ```cd slrm-w ```

```javascript
npm install
npm start
```

### Using Docker

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
```
# crontab -e
0,15,30,45 * * * * /home/USERNAME/export_queue.sh
```


### Customizing
#### Customize the squeue output
At first you need to update the ```export_queue.sh``` script from your users folder.
Al list of all available parameters can be found [here](http://geco.mines.edu/prototype/How_do_I_manage_jobs/squeue.html)

Next step is to update the ```<table>``` in ```view/index.html```.

#### Customizing
The listening port is defined in ```app/config.js```

Please note that you will need to update your ```docker run -p``` command if you change the port.

<b>Currently no support can be provided if you customize the project!</b>

### Contributing and Bug Reports
Every contribution is welcome.
For now, please clone the Repo and only create pull requests for issues marked with the <b>[help wanted](https://github.com/FlonTaut/slrm-w/labels/help%20wanted)</b> label.

A complete contribution guide will be added soon!

### License
slrm-w itself is licensed under the MIT license.

Some node modules are licensed under other free software license.
