import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../core/services/authentication.service";
import {UserStoreService} from "../../core/services/user-store.service";
import {environment} from "../../../environments/environment";
import {RequestService} from "../../core/services/request.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loggingIn = false;
  version: number;
  style: object = {};
  params: object = {};

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthenticationService,
              private userService: UserStoreService,
              private requestService: RequestService) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.initStyle();
    this.initParams();
    this.version = environment.version;
  }

  login() {
    const val = this.form.value;
    if (val.username && val.password) {
      this.loggingIn = true;
      this.authService.login(val.username, val.password).subscribe((result) => {
          this.userService.loadLoggedInUser().subscribe(subs => {
            this.loggingIn = false;
            if (result && subs) {
              this.router.navigateByUrl('/dashboard');
              this.requestService.activateConnection();
              // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
              // this.router.navigate(['/dashboard']); // tells them they've been logged out (somehow)
              // window.location.href = `${environment.dashboard}dashboard`;
              // this.router.navigate(['dashboard'], {relativeTo: this.route});
            }
          });
        }
      );
    }
  }

  private initStyle() {
    this.style = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      'background-color': '#040225',
    };
  }

  private initParams() {
    this.params = {
      particles: {
        number: {
          value: 130,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 4,
            color: '#0059ff'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 0.75,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 30,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00d1ff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    };
  }

}
