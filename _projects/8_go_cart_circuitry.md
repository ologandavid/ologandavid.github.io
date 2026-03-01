---
layout: page
title: Go Cart Power Circuitry
description: 6.131 Power Electronics Laboratory (Fall 2021)
img: assets/img/6.131/Picture14.jpg
importance: 1
category: undergraduate
related_publications: false
---

<b>Objective:</b> While taking MIT’s 6.131, students learn to design and build power electronic circuits through a
variety of labs. These labs include the construction of drive circuitry for an electric go-cart,
flash strobes, computer power supplies, three-phase inverters for AC motors, and resonant drives for
lamp ballasts. The semester ends with a final project in an area of interest to the student that
incorporates the semesters exploration into the analysis of such systems.

<h4 class="major">36 V Go-Cart Drive Circuitry </h4>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Media2.MOV" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Media1.MOV" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture7.1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Wired a Buck Converter Drive for Go Cart DC Drive Motor. The MOSFET Drivers are run on 30 kHz
alternating delay signals. An LC low pass filter, smoothed the input to Go Cart Motor.


<h4 class="major">Flourescent Lamp Ballast </h4>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Media3.MOV" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture8.1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture9.1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Constructed a Resonant Converter for Fluorescent Lamp Ballast. Resonant Frequency to strike the lamp
achieved between 30-40 kHz.

<h4 class="major">200 V DC Power Supply</h4>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture10.1.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture11.1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Built a 200V DC Power Supply with Transformer and Clamp that operates at CCM (Continuous Conduction
Mode) with a nominal voltage across Cclamp of 120 V.

<h4 class="major">DCM Boost LED Driver/Desk Lamp </h4>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture12.2.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture13.1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Media4.MOV" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


<h4 class="major"> Brushed DC Motor Build </h4>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Media5.MOV" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture14.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture15.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<h4 class="major">Three Phase Inverter, Induction Motor</h4>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture16.1.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/6.131/Picture17.1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.131/Picture18.1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.131/Picture19.1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.131/Picture20.2.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

Finite State Machine Drive for Three Phase Bridge Induction Motor Drive. System is driven by 21 kHz
PWM Oscillator with a variable duty cycle. 

<h4 class="major"> Bi-Directional Motor Controller </h4>
For my final project, I dedicated the last four weeks of the semester implementing bi-directional
motor control, with a feedback loop to implement cruise control. Essentially, the circuit would spin
the motor in both directions, and after a button was pressed, the motor would try its best to keep
its current speed constant even after loading. To do this, I built an H-Bridge, with PWM motor
control and an adjustable duty cycle. Subsequently, I used an ADC and a DAC as a sample and hold, to
record the back EMF of the motor once the button was pressed. Then using this as the reference
voltage, I designed a type II compensator with the desired gains to automatically ramp up the duty
cycle when necessary.
<div class="box alt">
<div class="row gtr-uniform">
    <div class="col-3"></div>
    <div class="col-6"><span class="image fit"><img src="images/6.131/Schematic4.png"
                alt="" /></span></div>
    <div class="col-3"></div>
</div>
</div>

<b>Applied Skills:</b> Circuit Construction, Analysis and Design
