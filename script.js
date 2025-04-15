const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const download = document.getElementById('download');
const frame = new Image();
frame.src = 'frame.png'; // ফ্রেম ইমেজ

upload.addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      frame.onload = function () {
        ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
});

download.addEventListener('click', function () {
  const link = document.createElement('a');
  link.download = 'profile_with_frame.png';
  link.href = canvas.toDataURL();
  link.click();
});