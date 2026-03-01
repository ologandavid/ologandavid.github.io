---
layout: page
title: Duck Hunt Video Game
description: 6.1151 Microcomputer Project Laboratory (Spring 2022)
img: assets/img/6.1151/Picture1.png
importance: 1
category: undergraduate
related_publications: false
---

<b>Objective:</b>
While taking MIT’s 6.1151, each student was tasked with creating a final project that would serve as
the cumulation of what we had learned about embedded microcontrollers, using either the 8051 or PSoC
(Programmable System on Chip). The objective of my particular project was to build an assortment of
games that would take advantage of the modularity and flexibility of the PSoC5. The games would be
played using an accompanying wireless controller run on a PSoC5LP Stick. Ideally, the two processors
would run separate programs, but would operate smoothly enough not to impede gameplay. The system
should be able to run three distinct games, including TIC-TAC-TOE, Pong, and a simple version of
Duck Hunt.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.1151/Media2.mov" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<b>Solution:</b>
My design featured two distinct parts. A wireless controller powered by a PSoC Stick and a
Receiver/VGA Connector attached to the main PSoC5. The PSoC Stick encoded controller button states
from the user and would transmit them wirelessly to the PSoC5 responsible for running game mechanics
and updating the associated monitor.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.1151/Picture3.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.1151/Picture4.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

On the main PSOC 5, a VGA2 board was wired for 2-bit color using an 74LS245N. Furthermore, a HC05
Wireless Bluetooth module and LCD Display was also wired to support Bluetooth communication with the
separate controller. On the PSoC Stick, four buttons, a joystick potentiometer and HC05 module were
attached to function as a controller.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.1151/Picture1.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.1151/Picture2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The PSoC Stick encoded joystick positions and button states as a series of bytes representing cursor
velocities and button presses. The main PSoC5 would generate a fixed frame given the current state of
the game and upload that to the buffer to update the monitor. An ISR was used to receive bytes and
update cursor positions and remaining targets without conflicting with screen refresh rates. The ISR
triggered at a slower clock to prioritize screen refresh rates. Each game was coded in C and could be
selected on startup.
    
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.1151/Media1.mp4" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<b>Applied Skills:</b> C (Programming), Assembly (Programming), Circuit Design, Analysis, and
    Construction

<div class="mt-3">
    <a href="https://github.com/ologandavid/6.1151--MicrocomputerProjectLab" class="btn btn-sm btn-outline-primary me-2">
    <i class="fab fa-github me-1"></i> Code
    </a>

    <a href="/assets/pdf/6_1151_Final_Project_Report (1).pdf" class="btn btn-sm btn-outline-primary">
    <i class="fas fa-file-alt me-1"></i> Paper
    </a>
</div>