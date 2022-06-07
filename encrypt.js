import CryptoJS from "crypto-js";
import bcryptjs from "bcryptjs";

bcryptjs.genSalt(10, function (err, salt) {
    if (err) {
        return console.log(err);
    }
    
  const MedicalRecord = {
    medicalRecord: {
      xray: {
        1: {
          url: "https://images.unsplash.com/photo-1581595219145-01060b2eb27d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVuZyUyMGNhbmNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          date: "05/06/2022",
          diagnosis: {
            percentage: 0,
            final_result: "",
          },
        },
      },
    },
  };

  var data = JSON.stringify(MedicalRecord);
  var key = "ChristianRodriguezUTD";
  var encriptado = CryptoJS.AES.encrypt(data, key);

  bcryptjs.hash(key, salt, function (err, hash) {
    if (err) {
        return console.log(err);
    }

    let HashedPassword = hash;

    bcryptjs.compare(key, HashedPassword, async function (err, isMatch) {
      if (isMatch) {
        console.log(HashedPassword);
        console.log(key);
        var desencriptado = CryptoJS.AES.decrypt(encriptado, key);
        console.log(desencriptado.toString(CryptoJS.enc.Utf8));
      }

      if (!isMatch) {
        console.log("The passwords didn't match");
        console.log(encriptado);
      }

      if (err) {
        return console.log(err);
      }
    });
  });
});
