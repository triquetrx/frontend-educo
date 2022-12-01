import { Component } from '@angular/core';
import { Testimonial } from './Testimonial';

@Component({
  selector: 'app-landing-page-component-testimonial',
  templateUrl: './landing-page-component-testimonial.component.html',
  styleUrls: ['./landing-page-component-testimonial.component.scss'],
})
export class LandingPageComponentTestimonialComponent {
  testimonials: Testimonial[] = [
    {
      profilePic: 'pic_1',
      testimonal:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fuga explicabo voluptas cupiditate assumenda quia ratione placeat quibusdam enim cum quam, corrupti delectus iusto earum odio aspernatur? Explicabo nobis rerum voluptatem, deserunt aut dignissimos reiciendis est, odio sint nam ea!',
      name: 'Chritine Estrade',
      collegeName: 'Elon university',
    },
    {
      profilePic: 'pic_2',
      testimonal:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fuga explicabo voluptas cupiditate assumenda quia ratione placeat quibusdam enim cum quam, corrupti delectus iusto earum odio aspernatur? Explicabo nobis rerum voluptatem, deserunt aut dignissimos reiciendis est, odio sint nam ea!',
      name: 'Jang Chi',
      collegeName: 'Akdeniz University',
    },
    {
      profilePic: 'pic_3',
      testimonal:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fuga explicabo voluptas cupiditate assumenda quia ratione placeat quibusdam enim cum quam, corrupti delectus iusto earum odio aspernatur? Explicabo nobis rerum voluptatem, deserunt aut dignissimos reiciendis est, odio sint nam ea!',
      name: 'Chritian Joseph',
      collegeName: 'Ahi Evran University',
    },
    {
      profilePic: 'pic_4',
      testimonal:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fuga explicabo voluptas cupiditate assumenda quia ratione placeat quibusdam enim cum quam, corrupti delectus iusto earum odio aspernatur? Explicabo nobis rerum voluptatem, deserunt aut dignissimos reiciendis est, odio sint nam ea!',
      name: 'Stephen Oliver',
      collegeName: 'Kafkas University',
    },
    {
      profilePic: 'pic_5',
      testimonal:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fuga explicabo voluptas cupiditate assumenda quia ratione placeat quibusdam enim cum quam, corrupti delectus iusto earum odio aspernatur? Explicabo nobis rerum voluptatem, deserunt aut dignissimos reiciendis est, odio sint nam ea!',
      name: 'Ritske Manuel',
      collegeName: 'Adnan Menderes University',
    },
  ];

  index: number = 0;

  increment(): void {
    if (this.index < this.testimonials.length - 1) {
      this.index = this.index + 1;
    }
    console.log(this.index);
  }

  decrement(): void {
    if (this.index > 0) {
      this.index = this.index - 1;
    }
    console.log(this.index);
  }

  activeProfileimage(imageName: String): boolean {
    return imageName == this.testimonials[this.index].profilePic;
  }
}
