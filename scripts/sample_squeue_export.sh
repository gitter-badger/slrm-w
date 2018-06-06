#!/bin/bash
squeue -o %i,%j,%u,%N,%C,%V,%T,%r > /root/slrm-w/out/squeue_text
