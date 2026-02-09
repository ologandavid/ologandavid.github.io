---
layout: page
title: Hybrid Trajectory Optimization for a Monkey Bar Robot Using DIRCOL
description: 16.745 Optimal Control and Reinforcement Learning (Spring 2023)
img: assets/img/16.745/tmp.gif
importance: 1
category: graduate
related_publications: false
---
In this paper we show a trajectory planning technique that mimics a monkey bar robot swinging from bar to bar. Using a hybrid system direct collocation (DIRCOL) trajectory optimization, we successfully demonstrate the robot swinging up from a dead hang to catch the first bar and swing to the subsequent bars. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/16.745/meshcat1.mp4" title="3D Animation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This DIRCOL technique was tested on various mass distributions in the robot as well as different bar separation distances to understand the behavior with varying parameters. In addition, we show the importance of a free time setup on the cost function in producing consistent feasible trajectories using this DIRCOL technique.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/16.745/Bar-Separation-Test-2.gif" title="2D" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<b>Applied Skills:</b> Julia, MeshCat, DIRCOL, Hybrid Systems, Lagrangian Dynamics, iPOPT Trajectory Optimization

