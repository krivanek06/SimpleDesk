import Swal, {SweetAlertResult} from 'sweetalert2';

// private
// --------------------------------------------
function generateQuestion(text: string): Promise<SweetAlertResult> {
  return Swal.fire({
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: "Zrušiť",
    confirmButtonText: 'Ano'
  });
}

function generateDeleteQuestion(text: string): Promise<SweetAlertResult> {
  return Swal.fire({
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: 'rgb(40, 171, 22)',
    cancelButtonText: "Zatvoriť",
    confirmButtonText: 'Zmazať',
  });
}

// public
// --------------------------------------------
export function swallNotification(text: string): void {
  Swal.fire({
    position: 'top-end',
    title: `<span style="color:#f0f0f0">${text}<span>`,
    showConfirmButton: false,
    timer: 3000,
    background: '#b20066',
    toast: true,
  });
}


export function swallErrorNotification(text: string): Promise<SweetAlertResult> {
  return Swal.fire({text, icon: 'error'});
}


export function swallEditComment(comment: string): Promise<SweetAlertResult> {
  return Swal.fire({
    html:
      '<label for="commentText">Zmente komentár a potvrdte</label>' +
      '<textarea id="commentText" class="swal2-input" style = "height: 200px;">' +
      comment +
      '</textarea>',
    focusConfirm: false,
    width: 750,
    preConfirm: () => {
      return [(document.getElementById('commentText') as HTMLInputElement).value];
    }
  });
}

export function swallSelectImage(imageName: string): Promise<SweetAlertResult> {
  return Swal.fire({
    title: "Potvrďte zmenu obrázku",
    html: `<img [src]="'../../../assets/images_avatars/' + imageName " style='width:350px'  />`,
    imageHeight: 500,
    imageAlt: 'A tall image',
    showConfirmButton: true,
    confirmButtonText: "Potvrdiť"
  });
}

export function swallChangePassword(): Promise<SweetAlertResult> {
  return Swal.fire({
    title: 'Zmena hesla',
    html:
      '<label for="old_pwd">Staré heslo</label> <input id="old_pwd" type = "password" class="swal2-input">' +
      '<label for="new_pwd1">nové heslo</label><input id="new_pwd1" type = "password"  class="swal2-input">' +
      '<label for="new_pwd2">nové heslo znovu</label><input id="new_pwd2" type = "password"  class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        (document.getElementById('old_pwd') as HTMLInputElement).value,
        (document.getElementById('new_pwd1') as HTMLInputElement).value,
        (document.getElementById('new_pwd2') as HTMLInputElement).value
      ];
    }
  });
}


// Directives
// --------------------------------------------
export function Confirmable(message: string) {
  return function (target: any, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      generateQuestion(message).then(result => result.value ? original.apply(this, args) : null);
    };
  };
}

export function ConfirmableDelete(message: string) {
  return function (target: any, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      generateDeleteQuestion(message).then(result => result.value ? original.apply(this, args) : null);
    };
  };
}

