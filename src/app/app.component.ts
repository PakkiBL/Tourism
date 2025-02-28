import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tourism';

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const navLinks = document.querySelectorAll("nav ul li a");

      window.addEventListener("scroll", () => {
          let fromTop = window.scrollY;

          navLinks.forEach(link => {
              const section = document.querySelector(link.getAttribute("href")!);

              if (section) {
                  const offsetTop = (section as HTMLElement).offsetTop - 50; // Adjust for navbar height
                  const offsetBottom = offsetTop + section.clientHeight;

                  if (fromTop >= offsetTop && fromTop < offsetBottom) {
                      link.classList.add("active");
                  } else {
                      link.classList.remove("active");
                  }
              }
          });
      });
    });
  }
}
