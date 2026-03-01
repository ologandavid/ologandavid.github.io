---
layout: page
title: Multi-Robot Motion Planning for Quadruped Robots
description: 16.782 Planning and Decision Making in Robotics (Fall 2023)
img: assets/img/16.782/4robot.gif
importance: 1
category: graduate
related_publications: false
---

<b>Objective:</b>
As a student in 16.782, my team and I decided to tackle the challenge of motion planning for multiple robotic agents in complex environments. Especially as robotics continues to expand into areas like search and rescue, exploration, and warehousing, the desire for autonomous robots capable of performing collision free coordinated tasks has noticeably escalated. Given my current research in quadruped robots and the unique mobility the platform provides, I decided it would be interesting to employ a variety of multi-agent planning strategies to see which performed best.


<b>Solution:</b>
To implement each planner, we leveraged Quad-SDK, my lab’s ROS-based framework for quadrupedal locomotion. By incorporating its suite of visualization tools, local footstep planner, and low-level motor controller, we were able to seamlessly integrate and test our planner performance on a variety of terrain. For each sampling-based planner, the representation of discrete time robot states is defined as a vector of robot body position, orientation and velocity. For the body of the project, my team and I explored three main motion planning algorithms.

<ol>
    <li>Sequential RRT-Connect (Rapidly Exploring Random Trees)</li>
    <li>Joint Space RRT-Connect</li>
    <li>Conflict Based Search</li>
</ol>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/16.782/head2head.mp4" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


The Sequential RRT-Connect operates by successively solving a path for each robot. By treating all prior paths as static obstacles and independently planning for each robot, we reduce the computational complexity of the process, improving speed, but at the sacrifice probabilistic completeness. The Joint Space RRT-Connect considers all robots simultaneously and solves for a trajectory in the joint state space of all robots. This approach is more comprehensive, and maintains completeness but scales poorly do to the increased state complexity. Finally, the CBS acts as the middle ground, planning for each robot individually using a low level RRT-Connect, while identifying and resolving path conflicts as they appear in its high-level search. This method aims to combine the best of both worlds, taking advantage of the individuality of the sequential RRT, and only solving the joint space problem when necessary. Throughout the project, my main responsibilities included implementing and testing the conflict-based search, as well as onboarding my teammates on the codebase and debugging any errors they might encounter.


<b>Results:</b>
We demonstrated the success of each method using simulation tests conducted in Gazebo and Rviz. For validity, the number of agents was set to two, but later extended to four to see how each method scales. In each scenario, we show that the planner can compute kino-dynamically feasible, collision free body trajectories for multiple robots over a number of randomly generated trial environments. The results are shown in the table below.

<table class="alt">
    <thead>
        <tr>
            <th>Planner</th>
            <th>Average Path Length (m)</th>
            <th>Average Planning Time (s)</th>
            <th>Success Rate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sequential</td>
            <td>18.2</td>
            <td>0.094</td>
            <td>69%</td>
        </tr>
        <tr>
            <td>Joint</td>
            <td>16.9</td>
            <td>1.067</td>
            <td>81%</td>
        </tr>
        <tr>
            <td>Conflict Based Search</td>
            <td>15.1</td>
            <td>0.254</td>
            <td>100%</td>
        </tr>
    </tbody>
</table>
<br>
Ultimately, as expected the sequential planner was the quickest, but often output suboptimal paths, and would often fail when subsequent robots became over constrained. The joint planner performed better, and allowed for crossing paths, but this often resulted in longer solve times. On average, the CBS performed best, with a shorter average path length and a decent average planning time.


The results demonstrate the importance of application specific planners, particularly for implementations where tradeoffs can be made on speed, computational complexity, completeness, and efficiency. CBS remains the most versatile approach, but the overall project highlights the continued need for scalable solutions to real world multi-agent motion planning.


<b>Applied Skills:</b> C++, ROS, Gazebo, RRT, Conflict Based Search, Multi-Robot Motion Planning

<div class="mt-3">
    <a href="https://github.com/ologandavid/multi-robot-quad-sdk" class="btn btn-sm btn-outline-primary me-2">
    <i class="fab fa-github me-1"></i> Code
    </a>

    <a href="/assets/pdf/Multi_Robot_Motion_Planning_for_Quadruped_Robots.pdf" class="btn btn-sm btn-outline-primary">
    <i class="fas fa-file-alt me-1"></i> Paper
    </a>
</div>