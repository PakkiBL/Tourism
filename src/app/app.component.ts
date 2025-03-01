import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tourism Website';

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const fromTop = window.scrollY;

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("routerLink")!);

      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY - 50;
        const offsetBottom = offsetTop + section.clientHeight;

        if (fromTop >= offsetTop && fromTop < offsetBottom) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }
}
