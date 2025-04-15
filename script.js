
const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const frame = new Image();
frame.src = "frame.png";

upload.addEventListener("change", function () {
  const file = upload.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      canvas.width = 400;
      canvas.height = 400;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, 400, 400);
      frame.onload = () => {
        ctx.drawImage(frame, 0, 0, 400, 400);
      };
      ctx.drawImage(frame, 0, 0, 400, 400);
    };
    img.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

function downloadImage() {
  const link = document.createElement("a");
  link.download = "profile_frame.png";
  link.href = canvas.toDataURL();
  link.click();
}
