export const authParams = {
  register: [
    "email",
    "username",
    "password",
    "firstname",
    "lastname",
    "identity",
    "typeidentity",
    "birthdate",
  ],
  login: ["username", "password"],
};

export const appointmentParams = {
  appointment: ["year", "month", "professionalId"],
  date: ["date", "professional"],
  schuddleOrCancel: ["userId", "appointmentId"],
};

export const professionalParams = {
  create: ["firstname", "lastname", "speciality"],
  update: ["professionalId", "data"],
  delete: ["professionalId"],
};

export const specialityParams = {
  create: ["data"],
  update: ["specialityId", "data"],
  delete: ["specialityId"],
};