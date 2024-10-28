export function returnRandomUserColor() {
  const colors = ["0038FF", "00BEE8", "1FD7C1", "6E52FF", "9327FF", "9747FF", "FC71FF", "FF4646", "FF5EB3", "FF745E"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function getInitialsFromName(fullName) {
  console.log(fullName);

  const nameParts = fullName.split(" ");
  const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
  const lastNameInitial = nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() : "";
  return firstNameInitial + lastNameInitial;
}

export function returnRandomContact() {
  const names = [
    "Max Mustermann",
    "Erika Mustermann",
    "Hans Müller",
    "Petra Schmidt",
    "Klaus Schneider",
    "Monika Fischer",
    "Wolfgang Weber",
    "Sabine Meyer",
    "Jürgen Wagner",
    "Andrea Becker",
    "Thomas Schulz",
    "Birgit Hoffmann",
    "Michael Bauer",
    "Ursula Koch",
    "Stefan Richter",
    "Gabriele Klein",
    "Andreas Wolf",
    "Martina Schröder",
    "Peter Neumann",
    "Susanne Schwarz",
    "Frank Zimmermann",
    "Karin Braun",
    "Ralf Krüger",
    "Heike Hofmann",
    "Joachim Hartmann",
    "Anja Lange",
    "Bernd Schmitt",
    "Claudia Werner",
    "Holger Krause",
    "Ingrid Lehmann",
    "Matthias Schmid",
    "Renate Schubert",
    "Dieter Böhm",
    "Elke Frank",
    "Manfred Albrecht",
    "Silke Simon",
    "Günter Ludwig",
    "Angelika Busch",
    "Horst Peters",
    "Christa Fuchs"
  ];
  const emails = [
    "max.mustermann@example.com",
    "erika.mustermann@example.com",
    "hans.mueller@example.com",
    "petra.schmidt@example.com",
    "klaus.schneider@example.com",
    "monika.fischer@example.com",
    "wolfgang.weber@example.com",
    "sabine.meyer@example.com",
    "juergen.wagner@example.com",
    "andrea.becker@example.com",
    "thomas.schulz@example.com",
    "birgit.hoffmann@example.com",
    "michael.bauer@example.com",
    "ursula.koch@example.com",
    "stefan.richter@example.com",
    "gabriele.klein@example.com",
    "andreas.wolf@example.com",
    "martina.schroeder@example.com",
    "peter.neumann@example.com",
    "susanne.schwarz@example.com",
    "frank.zimmermann@example.com",
    "karin.braun@example.com",
    "ralf.krueger@example.com",
    "heike.hofmann@example.com",
    "joachim.hartmann@example.com",
    "anja.lange@example.com",
    "bernd.schmitt@example.com",
    "claudia.werner@example.com",
    "holger.krause@example.com",
    "ingrid.lehmann@example.com",
    "matthias.schmid@example.com",
    "renate.schubert@example.com",
    "dieter.boehm@example.com",
    "elke.frank@example.com",
    "manfred.albrecht@example.com",
    "silke.simon@example.com",
    "guenter.ludwig@example.com",
    "angelika.busch@example.com",
    "horst.peters@example.com",
    "christa.fuchs@example.com"
  ];

  const phones = [
    "+49 170 1234567",
    "+49 171 2345678",
    "+49 172 3456789",
    "+49 173 4567890",
    "+49 174 5678901",
    "+49 175 6789012",
    "+49 176 7890123",
    "+49 177 8901234",
    "+49 178 9012345",
    "+49 179 0123456",
    "+49 160 1234567",
    "+49 161 2345678",
    "+49 162 3456789",
    "+49 163 4567890",
    "+49 164 5678901",
    "+49 165 6789012",
    "+49 166 7890123",
    "+49 167 8901234",
    "+49 168 9012345",
    "+49 169 0123456",
    "+49 150 1234567",
    "+49 151 2345678",
    "+49 152 3456789",
    "+49 153 4567890",
    "+49 154 5678901",
    "+49 155 6789012",
    "+49 156 7890123",
    "+49 157 8901234",
    "+49 158 9012345",
    "+49 159 0123456",
    "+49 130 1234567",
    "+49 131 2345678",
    "+49 132 3456789",
    "+49 133 4567890",
    "+49 134 5678901",
    "+49 135 6789012",
    "+49 136 7890123",
    "+49 137 8901234",
    "+49 138 9012345",
    "+49 139 0123456"
  ];

  const random = Math.floor(Math.random() * names.length);

  return [names[random], emails[random], phones[random]];
}