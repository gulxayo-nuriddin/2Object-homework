// 1-masala

// let user = {
//     firstName: "  asaDbek  ",
//     lastName: " ABDULHAMIDOV ",
//     email: " ASADBEK@GMAIL.COM ",
//     username: "  asadbek_dev  "
// };

// let firstName = user.firstName.trim();
// firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

// let lastName = user.lastName.trim();
// lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

// let email = user.email.trim().toLowerCase();
// let username = user.username.trim().toLowerCase();

// let isEmailValid = email.includes("@") && email.endsWith(".com");
// let isUsernameValid = username.length >= 5;

// console.log(`Ism: ${firstName}`);
// console.log(`Familiya: ${lastName}`);
// console.log(`Email: ${email}`);
// console.log(`Username: ${username}`);

// if (isEmailValid && isUsernameValid) {
//     console.log("Holat: muvaffaqiyatli ro'yxatdan o'tdi");
// } else {
//     console.log("Holat: Ma'lumotlarda xatolik bor");
// }



// 2-masala

// let user2 = {
//     name: "  MALİKa  ",
//     email: " MALIKA@EXAMPLE.COM ",
//     phone: " +998 90 123 45 67 ",
//     password: " Malika2026 "
// };

// let name = user2.name.trim();
// name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

// let email2 = user2.email.trim().toLowerCase();
// let phone = user2.phone.trim();
// let password = user2.password.trim();

// let isEmailValid2 = email2.includes("@") && email2.endsWith(".com");
// let isPhoneValid = phone.startsWith("+998");
// let isPassValid = password.length >= 8;

// console.log(`Ism: ${name}`);
// console.log(`Email: ${email2}`);
// console.log(`Telefon: ${phone}`);
// console.log(`Parol uzunligi: ${password.length}`);

// if (isEmailValid2 && isPhoneValid && isPassValid) {
//     console.log("Holat: ma'lumotlar qabul qilindi");
// } else {
//     console.log("Holat: Xatolik mavjud");
// }


// 3-masala

// let product = {
//     name: "  WIRELESS HEADPHONES  ",
//     category: "ELECTRONICS",
//     description: " Bluetooth headphones with noise cancellation ",
//     code: " WH-2026 "
// };

// function checkProduct(obj) {
//     let name = obj.name.trim();
//     name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

//     let category = obj.category.trim().toUpperCase();
//     let description = obj.description.trim();
//     let code = obj.code.trim();

//     let isDescValid = description.length >= 20 && description.toLowerCase().includes("bluetooth");
//     let isCodeValid = code.startsWith("WH-");

//     console.log(`Mahsulot: ${name}`);
//     console.log(`Kategoriya: ${category}`);
//     console.log(`Kod: ${code}`);

//     if (isDescValid && isCodeValid) {
//         console.log("Holat: tekshiruvdan o'tdi");
//     } else {
//         console.log("Holat: Ma'lumotlar talabga javob bermaydi");
//         if (!isDescValid) console.log("-> Tavsif 20 belgidan kam yoki 'bluetooth' so'zi yo'q.");
//         if (!isCodeValid) console.log("-> Kod 'WH-' bilan boshlanishi kerak.");
//     }
// }

// checkProduct(product);


// 4-masala

// let message = {
//     sender: "  SARDOR  ",
//     subject: " PAYMENT ISSUE ",
//     text: " I cannot complete my payment. Please help! ",
//     email: " SARDOR@MAIL.COM "
// };

// let sender = message.sender.trim();
// sender = sender.charAt(0).toUpperCase() + sender.slice(1).toLowerCase();

// let subject = message.subject.trim().toLowerCase();
// let text = message.text.trim();
// let msgEmail = message.email.trim().toLowerCase();

// let isTextValid = text.length >= 20 && text.toLowerCase().includes("payment");
// let isMsgEmailValid = msgEmail.includes("@");

// console.log(`Yuboruvchi: ${sender}`);
// console.log(`Mavzu: ${subject}`);
// console.log(`Email: ${msgEmail}`);

// if (isTextValid && isMsgEmailValid) {
//     console.log("Holat: murojaat qabul qilindi");
// } else {
//     console.log("Holat: Xatolik bor");
// }



5-masala

// let profile = {
//     fullName: "  dILSHOD KARIMOV  ",
//     email: " DILSHOD@GMAIL.COM ",
//     username: "  dilshod_uz  ",
//     city: "  TOSHKENT  ",
//     website: " https://dilshod.uz "
// };

// let fullName = profile.fullName.trim();
// let spaceIndex = fullName.indexOf(" ");
// let fName = fullName.slice(0, spaceIndex);
// let lName = fullName.slice(spaceIndex + 1).trim();

// fName = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
// lName = lName.charAt(0).toUpperCase() + lName.slice(1).toLowerCase();
// let formattedFullName = fName + " " + lName;

// let profEmail = profile.email.trim().toLowerCase();
// let profUsername = profile.username.trim().toLowerCase();

// let city = profile.city.trim();
// city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

// let website = profile.website.trim();

// let isProfEmailValid = profEmail.includes("@") && profEmail.endsWith(".com");
// let isProfUsernameValid = profUsername.length >= 6;
// let isWebsiteValid = website.startsWith("https://");

// console.log(`F.I.Sh.: ${formattedFullName}`);
// console.log(`Email: ${profEmail}`);
// console.log(`Username: ${profUsername}`);
// console.log(`Shahar: ${city}`);
// console.log(`Website: ${website}`);

// if (isProfEmailValid && isProfUsernameValid && isWebsiteValid) {
//     console.log("Holat: profil tasdiqlandi");
// } else {
//     console.log("Holat: Ba'zi talablar bajarilmadi");
// }



