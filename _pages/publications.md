---
title: "Publications"
permalink: /publications/
author_profile: true
---
<div class="pub-hero">
  <span class="pub-eyebrow">Academic Portfolio</span>

  <p>
    A collection of peer-reviewed journal articles, conference papers,
    patents, software, and book chapters.
  </p>
</div>
  {% assign publication_groups =
    "international_journals,domestic_journals,international_conferences,domestic_conferences,patents,software,book_chapters"
    | split: ","
  %}

  {% assign total_publications = 0 %}

  {% for group_key in publication_groups %}
    {% assign group = site.data.publications[group_key] %}
    {% assign total_publications = total_publications | plus: group.items.size %}
  {% endfor %}

  <nav class="pub-category-nav" aria-label="Publication categories">
    {% for group_key in publication_groups %}
      {% assign group = site.data.publications[group_key] %}

      <a href="#{{ group_key }}">
        <span>{{ group.short_title }}</span>
        <span class="pub-nav-count">{{ group.items.size }}</span>
      </a>
    {% endfor %}
  </nav>

  <div class="pub-layout">

    <aside class="pub-sidebar">
      <div class="pub-sidebar-title">Categories</div>

      {% for group_key in publication_groups %}
        {% assign group = site.data.publications[group_key] %}

        <a href="#{{ group_key }}">
          <span>{{ group.short_title }}</span>
          <span>{{ group.items.size }}</span>
        </a>
      {% endfor %}
    </aside>

    <main class="pub-content">

      {% for group_key in publication_groups %}
        {% assign group = site.data.publications[group_key] %}

        <section class="pub-section" id="{{ group_key }}">

          <div class="pub-section-heading">
            <div>
              <span class="pub-section-label">
                Publication category
              </span>

              <h2>{{ group.title }}</h2>
            </div>

            <div class="pub-section-count">
              {{ group.items.size }}
            </div>
          </div>

          {% if group.items.size > 0 %}

            <ol class="pub-list">
              {% assign sorted_items = group.items | sort: "year" | reverse %}

              {% for item in sorted_items %}
                <li class="pub-item">

                  <div class="pub-item-year">
                    {{ item.year }}
                  </div>

                  <div class="pub-item-body">
                    <h3>
                      {% if item.doi != "" %}
                        <a
                          href="{{ item.doi }}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {{ item.title }}
                        </a>
                      {% else %}
                        {{ item.title }}
                      {% endif %}
                    </h3>

                    <p class="pub-authors">
                      {{ item.authors }}
                    </p>

                    <p class="pub-meta">
                      <strong>{{ item.venue }}</strong>

                      {% if item.volume != "" %}
                        , {{ item.volume }}
                      {% endif %}

                      {% if item.pages != "" %}
                        , {{ item.pages }}
                      {% endif %}

                      {% if item.date != "" %}
                        , {{ item.date }}
                      {% endif %}.
                    </p>

                    {% if item.doi != "" or item.pdf != "" %}
                      <div class="pub-actions">

                        {% if item.doi != "" %}
                          <a
                            href="{{ item.doi }}"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fas fa-external-link-alt"></i>
                            DOI
                          </a>
                        {% endif %}

                        {% if item.pdf != "" %}
                          <a
                            href="{{ item.pdf | relative_url }}"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i class="fas fa-file-pdf"></i>
                            PDF
                          </a>
                        {% endif %}

                      </div>
                    {% endif %}
                  </div>

                </li>
              {% endfor %}
            </ol>

          {% else %}

            <div class="pub-empty">
              <i class="far fa-folder-open"></i>

              <div>
                <strong>No publications listed yet.</strong>
                <p>This category will be updated soon.</p>
              </div>
            </div>

          {% endif %}

        </section>
      {% endfor %}

    </main>
  </div>
</div>
