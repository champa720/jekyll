---
title: Writing
icon: edit

layout: page
---

<ul class="collection">
  {% for resource in page.resources %}
  <a class="collection-item avatar waves-effect waves-light" href="{{ resource.resource_path }}">
    <i class="material-icons circle teal">{{ resource.icon }}</i>
    <span class="title">{{ resource.title }}</span>
    <p>{{ resource.description }}</p>
  </a>
  {% endfor %}
  {% for collection in site.writing %}
    <a class="collection-item avatar waves-effect waves-light" href="{{ collection.url }}">
    <i class="material-icons circle teal">{{ collection.icon }}</i>
    <span class="title">{{ collection.title }}</span>
    <p>{{ collection.description }}</p>
  </a>
  {% endfor %}
</ul>