import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.atractivo.upsert({
    where: {id: 1},
    update: {},
    create: {
        id: 1,
        categoria: "Museo",
        descripcion: "Antigua casona típica del trópico, hace unos años funciono de hotel y hospedo a grandes artistas y políticos, entre ellos Pedro Infante, Miroslava Šternová Beková, Adolfo López Mateos y entre otros. Fue morada de la Sra. Isabel Rullán de Izundegui, incansable promotora cultural, desde 1997 funciona como galería, cuenta con 3 salas de exposiciones, se puede encontrar artesanías, bolsas, bisuterías, productos tabasqueños.",
        descripcion2: "Antigua casona típica del trópico, hace unos años funciono de hotel y hospedo a grandes artistas y políticos, entre ellos Pedro Infante, Miroslava Šternová Beková, Adolfo López Mateos y entre otros. Fue morada de la Sra. Isabel Rullán de Izundegui, incansable promotora cultural, desde 1997 funciona como galería, cuenta con 3 salas de exposiciones, se puede encontrar artesanías, bolsas, bisuterías, productos tabasqueños.",
        dias_abiertos: "Lunes - Domingo",
        direccion: "Centro Histórico",
        facebook: "",
        fotos: [
            "https://imagenturistica.tabasco.gob.mx/_data/i/upload/2023/05/04/20230504124220-697df8eb-me.jpg",
            "https://imagenturistica.tabasco.gob.mx/_data/i/upload/2023/05/04/20230504124221-0460e63d-me.jpg",
            "https://imagenturistica.tabasco.gob.mx/_data/i/upload/2023/05/04/20230504124219-94772c7f-me.jpg"
        ],
        horarios: "Lunes a domingo de 9:00 - 20:00 horas",
        horarios2: "Lunes a domingo de 9:00 - 20:00 horas",
        instagram: "",
        isVisible: false,
        nombre: "Galería de Arte Casa Siempre Viva",
        nombre2: "Galería de Arte Casa Siempre Viva",
        popular: false,
        precio: 0,
        precio2: 0,
        region: "",
        tags: [
            ""
        ],
        telefono: "9933188066",
        tripadvisor: "",
        ubicacion: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.776660608231!2d-92.92155158511508!3d17.989124887720685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd8112ac0e48f%3A0xd48c054e3584106f!2sGaler%C3%ADa%20de%20Arte%20Casa%20Siempre%20Viva!5e0!3m2!1ses-419!2smx!4v1681849520343!5m2!1ses-419!2smx\" width=\"100%\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        whatsapp: "",
    },
  });

  const post2 = await prisma.atractivo.upsert({
    where: {id: 2},
    update: {},
    create: {
        id: 2,
        categoria: "Monumento",
        descripcion: "Obra inaugurada en 1998 siendo gobernador el Lic. Roberto Madrazo Pintado. En el relato del mismo autor en el libro titulado de la misma forma \\\"Mujer Ceiba\\\" señala que esta obra maestra nació sin duda como parte de un reclamo ecológico, es por eso por lo que esta obra ha sido seguramente la más controvertida en la historia de Tabasco. Tiene una altura de 8 metros. Esta obra que embellece sin duda alguna la Laguna de las Ilusiones, con su majestuosa pose y sobre todo viendo esa asociación entre árbol y mujer que bien plasmó el artista tabasqueño Ventura Marín con sus manos.",
        descripcion2: "Obra inaugurada en 1998 siendo gobernador el Lic. Roberto Madrazo Pintado. En el relato del mismo autor en el libro titulado de la misma forma \\\"Mujer Ceiba\\\" señala que esta obra maestra nació sin duda como parte de un reclamo ecológico, es por eso por lo que esta obra ha sido seguramente la más controvertida en la historia de Tabasco. Tiene una altura de 8 metros. Esta obra que embellece sin duda alguna la Laguna de las Ilusiones, con su majestuosa pose y sobre todo viendo esa asociación entre árbol y mujer que bien plasmó el artista tabasqueño Ventura Marín con sus manos.",
        dias_abiertos: "Siempre Abierto",
        direccion: "Laguna de las ilusiones",
        facebook: "",
        fotos: [
            "https://imagenturistica.tabasco.gob.mx/_data/i/upload/2023/05/04/20230504124931-b330f6c5-me.jpg",
            "https://imagenturistica.tabasco.gob.mx/_data/i/upload/2023/05/04/20230504124932-2d5e4843-me.jpg",
            "https://imagenturistica.tabasco.gob.mx/_data/i/upload/2023/05/04/20230504124930-e00c642b-me.jpg"
        ],
        horarios: "",
        horarios2: "",
        instagram: "",
        isVisible: true,
        nombre: "La Mujer Ceiba",
        nombre2: "La Mujer Ceiba",
        popular: false,
        precio: 0,
        precio2: 0,
        region: "",
        tags: [
            ""
        ],
        telefono: "",
        tripadvisor: "",
        ubicacion: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.688751802392!2d-92.94034282591383!3d17.99321208507254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd789d82d047b%3A0x760396bd0bc9bea6!2sMujer%20Ceiba!5e0!3m2!1ses-419!2smx!4v1681850041818!5m2!1ses-419!2smx\" width=\"100%\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        whatsapp: "",
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });