// https://en.wikipedia.org/wiki/Data_URI_scheme#Syntax
const generate = () => {
  let input = document.getElementById("fileinp");
  let out = "Select one or more files.";
  if ("files" in input) {
    if (input.files.length != 0) {
      out = "";
      for (let file of input.files) {
        const reader = new FileReader();
        // Trusting the blobs mime type is kind of stupid but it only harms whoever is trying to spoof the file extension
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          out += `${file.name}: data:${file.type};base64,${reader.result}<br><br>`;
          document.getElementById("textout").innerHTML = out;
        };
      }
    } else {
      document.getElementById("textout").innerHTML = out;
    }
  }
};
