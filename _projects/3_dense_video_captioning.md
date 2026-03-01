---
layout: page
title: Dense Video Captioning
description: 11.785 Introduction to Deep Learning (Spring 2023)
img: assets/img/11.785/xukungif.gif
importance: 1
category: graduate
related_publications: false
---

In recent years, there has been a large research focus on dense video captioning. Video captioning has applications in many fields such as autonomous driving, video surveillance and creating captions for those with visual impairments. As such, a novel approach is proposed by employing language models (LM) to help to semantically align video features in an attempt to improve the overall performance of dense video captioning. The baseline model for comparison, End-to-end dense video captioning with parallel decoding (PDVC), produced strong results compared to many state of the art video captioning frameworks. PDVC is trained on the ActivityNet and YouCook2 datasets but for this study only YouCook2 was used due to computational capacity limits. We propose the incorporation of semantic alignment through the addition of a tuner network before the video features are passed through the PDVC framework. Ablations were ran for different tuner architectures and overall, the modified PDVC framework outperformed the baseline PDVC in many evaluation metrics. Promising future extensions with Semantic alignment and Dense Video Captioning remain with its application to larger and more comprehensive data sets.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/11.785/Picture1.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/11.785/xukun.mp4" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<b>Applied Skills:</b> PyTorch, Linux, GCP, Python, Deep Learning

<div class="mt-3">
    <a href="https://github.com/ologandavid/DenseVideoCaptioning" class="btn btn-sm btn-outline-primary me-2">
    <i class="fab fa-github me-1"></i> Code
    </a>

    <a href="/assets/pdf/11_785_Final_Project.pdf" class="btn btn-sm btn-outline-primary">
    <i class="fas fa-file-alt me-1"></i> Paper
    </a>
</div>