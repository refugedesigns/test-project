import mongoose from "mongoose";
import dotenv from "dotenv";
import MainSector from "./src/models/main-sector";
import SubSector from "./src/models/sub-sector";
import Field from "./src/models/field";

dotenv.config({
  path: __dirname + "/.env.local",
});

async function seed() {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then((result) => console.log("connected to db"));
    await mongoose.connection.db.dropDatabase();

    console.log("Start saving all sectors");
    const mainSector = await MainSector.create({
      label: "Manufacturing",
    });

    const sub1 = await SubSector.create({
      label: "Construction materials",
      value: "Construction materials",
    });
    mainSector.options.push(sub1);
    await mainSector.save();

    const sub2 = await SubSector.create({
      label: "Electronics and Optics",
      value: "Electronics and Optics",
    });
    mainSector.options.push(sub2);
    await mainSector.save();

    const sub3 = await SubSector.create({
      label: "Food and Beverage",
      value: "Food and Beverage",
    });
    mainSector.options.push(sub3);
    await mainSector.save();

    const field1 = await Field.create({
      label: "Bakery & confectionery products",
      value: "Bakery & confectionery products",
    });
    sub3.options.push(field1);
    await sub3.save();

    const field2 = await Field.create({
      label: "Beverages",
      value: "Beverages",
    });
    sub3.options.push(field2);
    await sub3.save();

    const field3 = await Field.create({
      label: "Fish & fish products",
      value: "Fish & fish products",
    });
    sub3.options.push(field3);
    await sub3.save();

    const field4 = await Field.create({
      label: "Meat & meat products",
      value: "Meat & meat products",
    });
    sub3.options.push(field4);
    await sub3.save();

    const field5 = await Field.create({
      label: "Milk & dairy products",
      value: "Milk & dairy products",
    });
    sub3.options.push(field5);
    await sub3.save();

    const field6 = await Field.create({
      label: "Other",
      value: "Other",
    });
    sub3.options.push(field6);
    await sub3.save();

    const field7 = await Field.create({
      label: "Sweets & snack food",
      value: "Sweets & snack food",
    });
    sub3.options.push(field7);
    await sub3.save();

    const sub4 = await SubSector.create({
      label: "Furniture",
      value: "Furniture",
    });
    mainSector.options.push(sub4);
    await mainSector.save();

    const field8 = await Field.create({
      label: "Bathroom/sauna",
      value: "Bathroom/sauna",
    });
    sub4.options.push(field8);
    await sub4.save();

    const field9 = await Field.create({
      label: "Bedroom",
      value: "Bedroom",
    });
    sub4.options.push(field9);
    await sub4.save();

    const field10 = await Field.create({
      label: "Children room",
      value: "Children room",
    });
    sub4.options.push(field10);
    await sub4.save();

    const field11 = await Field.create({
      label: "Kitchen",
      value: "Kitchen",
    });
    sub4.options.push(field11);
    await sub4.save();

    const field12 = await Field.create({
      label: "Living room",
      value: "Living room",
    });
    sub4.options.push(field12);
    await sub4.save();

    const field13 = await Field.create({
      label: "Office",
      value: "Office",
    });
    sub4.options.push(field13);
    await sub4.save();

    const field14 = await Field.create({
      label: "Other(Furniture)",
      value: "Other(Furniture)",
    });
    sub4.options.push(field14);
    await sub4.save();

    const field15 = await Field.create({
      label: "Outdoor",
      value: "Outdoor",
    });
    sub4.options.push(field15);
    await sub4.save();

    const field16 = await Field.create({
      label: "Project furniture",
      value: "Project furniture",
    });
    sub4.options.push(field16);
    await sub4.save();

    const sub5 = await SubSector.create({
      label: "Machinery",
      value: "Machinery",
    });
    mainSector.options.push(sub5);
    await mainSector.save();

    const field17 = await SubSector.create({
      label: "Machinery components",
      value: "Machinery components",
    });
    sub5.options.push(field17);
    await sub5.save();

    const field18 = await SubSector.create({
      label: "Machinery equipment/tools",
      value: "Machinery equipment/tools",
    });
    sub5.options.push(field18);
    await sub5.save();

    const field19 = await SubSector.create({
      label: "Manufacture of machinery",
      value: "Manufacture of machinery",
    });
    sub5.options.push(field19);
    await sub5.save();

    const field20 = await SubSector.create({
      label: "Maritime",
      value: "Maritime",
    });
    sub5.options.push(field20);
    await sub5.save();

    const field21 = await Field.create({
      label: "Aluminium and steel workboats",
      value: "Aluminium and steel workboats",
    });
    field20.options.push(field21);
    await field20.save();

    const field22 = await Field.create({
      label: "Boat/Yatch building",
      value: "Boat/Yatch building",
    });
    field20.options.push(field22);
    await field20.save();

    const field23 = await Field.create({
      label: "Ship repair and conversion",
      value: "Ship repair and conversion",
    });
    field20.options.push(field23);
    await field20.save();

    const field24 = await SubSector.create({
      label: "Metal structures",
      value: "Metal structures",
    });
    sub5.options.push(field24);
    await sub5.save();

    const field25 = await SubSector.create({
      label: "Other",
      value: "Other",
    });
    sub5.options.push(field25);
    await sub5.save();

    const field26 = await SubSector.create({
      label: "Repair and maintenance service",
      value: "Repair and maintenance service",
    });
    sub5.options.push(field26);
    await sub5.save();

    const sub6 = await SubSector.create({
      label: "Metalworking",
      value: "Metalworking",
    });
    mainSector.options.push(sub6);
    await mainSector.save();

    const field27 = await SubSector.create({
      label: "Construction of metal structures",
      value: "Construction of metal structures",
    });
    sub6.options.push(field27);
    await sub6.save();

    const field28 = await SubSector.create({
      label: "Houses and buildings",
      value: "Houses and buildings",
    });
    sub6.options.push(field28);
    await sub6.save();

    const field29 = await SubSector.create({
      label: "Metal products",
      value: "Metal products",
    });
    sub6.options.push(field29);
    await sub6.save();

    const field30 = await SubSector.create({
      label: "Metal works",
      value: "Metal works",
    });
    sub6.options.push(field30);
    await sub6.save();

    const field31 = await Field.create({
      label: "CNC-machining",
      value: "CNC-machining",
    });
    field30.options.push(field31);
    await field30.save();

    const field32 = await Field.create({
      label: "Forgings, Fasteners",
      value: "Forgings, Fasteners",
    });
    field30.options.push(field32);
    await field30.save();

    const field33 = await Field.create({
      label: "Gas, Plasma, Laser cutting",
      value: "Gas, Plasma, Laser cutting",
    });
    field30.options.push(field33);
    await field30.save();

    const field34 = await Field.create({
      label: "MIG, TIG, Aluminum welding",
      value: "MIG, TIG, Aluminum welding",
    });
    field30.options.push(field34);
    await field30.save();

    const sub7 = await SubSector.create({
      label: "Plastic and Rubber",
      value: "Plastic and Rubber",
    });
    mainSector.options.push(sub7);
    await mainSector.save();

    const field35 = await SubSector.create({
      label: "Packaging",
      value: "Packaging",
    });
    sub7.options.push(field35);
    await sub7.save();

    const field36 = await SubSector.create({
      label: "Plastic goods",
      value: "Plastic goods",
    });
    sub7.options.push(field36);
    await sub7.save();

    const field37 = await SubSector.create({
      label: "Plastic processing technology",
      value: "Plastic processing technology",
    });
    sub7.options.push(field37);
    await sub7.save();

    const field38 = await Field.create({
      label: "Blowing",
      value: "Blowing",
    });
    field37.options.push(field38);
    await field37.save();

    const field39 = await Field.create({
      label: "Moulding",
      value: "Moulding",
    });
    field37.options.push(field39);
    await field37.save();

    const field40 = await Field.create({
      label: "Plastic welding and processing",
      value: "Plastic welding and processing",
    });
    field37.options.push(field40);
    await field37.save();

    const field41 = await SubSector.create({
      label: "Plastic profiles",
      value: "Plastic profiles",
    });
    sub7.options.push(field41);
    await sub7.save();

    const sub8 = await SubSector.create({
      label: "Printing",
      value: "Printing",
    });
    mainSector.options.push(sub8);
    await mainSector.save();

    const field42 = await SubSector.create({
      label: "Advertising",
      value: "Advertising",
    });
    sub8.options.push(field42);
    await sub8.save();

    const field43 = await SubSector.create({
      label: "Book/Periodicals printing",
      value: "Book/Periodicals printing",
    });
    sub8.options.push(field43);
    await sub8.save();

    const field44 = await SubSector.create({
      label: "Labelling and packaging printing",
      value: "Labelling and packaging printing",
    });
    sub8.options.push(field44);
    await sub8.save();

    const sub9 = await SubSector.create({
      label: "Textile and Clothing",
      value: "Textile and Clothing",
    });
    mainSector.options.push(sub9);
    await mainSector.save();

    const field45 = await SubSector.create({
      label: "Clothing",
      value: "Clothing",
    });
    sub9.options.push(field45);
    await sub9.save();

    const field46 = await SubSector.create({
      label: "Textile",
      value: "Textile",
    });
    sub9.options.push(field46);
    await sub9.save();

    const sub10 = await SubSector.create({
      label: "Wood",
      value: "Wood",
    });
    mainSector.options.push(sub10);
    await mainSector.save();

    const field47 = await SubSector.create({
      label: "Other(Wood)",
      value: "Other(Wood)",
    });
    sub10.options.push(field47);
    await sub10.save();

    const field48 = await SubSector.create({
      label: "Wooden building materials",
      value: "Wooden building materials",
    });
    sub10.options.push(field48);
    await sub10.save();

    const field49 = await SubSector.create({
      label: "Wooden houses",
      value: "Wooden houses",
    });
    sub10.options.push(field49);
    await sub10.save();

    const mainSector2 = await MainSector.create({
      label: "Other",
    });

    const sub11 = await SubSector.create({
      label: "Creative industries",
      value: "Creative industries",
    });
    mainSector2.options.push(sub11);
    await mainSector2.save();

    const sub12 = await SubSector.create({
      label: "Energy technology",
      value: "Energy technology",
    });
    mainSector2.options.push(sub12);
    await mainSector2.save();

    const sub13 = await SubSector.create({
      label: "Environment",
      value: "Environment",
    });
    mainSector2.options.push(sub13);
    await mainSector2.save();

    const mainSector3 = await MainSector.create({
      label: "Service",
    });

    const sub14 = await SubSector.create({
      label: "Business services",
      value: "Business services",
    });
    mainSector3.options.push(sub14);
    await mainSector3.save();

    const sub15 = await SubSector.create({
      label: "Engineering",
      value: "Engineering",
    });
    mainSector3.options.push(sub15);
    await mainSector3.save();

    const sub16 = await SubSector.create({
      label: "Information Technology and Telecommunications",
      value: "Information Technology and Telecommunications",
    });
    mainSector3.options.push(sub16);
    await mainSector3.save();

    const field50 = await Field.create({
      label: "Data processing, Web portals, E-marketing",
      value: "Data processing, Web portals, E-marketing",
    });
    sub16.options.push(field50);
    await sub16.save();

    const field51 = await Field.create({
      label: "Programming, Consultancy",
      value: "Programming, Consultancy",
    });
    sub16.options.push(field51);
    await sub16.save();

    const field52 = await Field.create({
      label: "Software, Hardware",
      value: "Software, Hardware",
    });
    sub16.options.push(field52);
    await sub16.save();

    const field53 = await Field.create({
      label: "Telecommunications",
      value: "Telecommunications",
    });
    sub16.options.push(field53);
    await sub16.save();

    const sub17 = await SubSector.create({
      label: "Tourism",
      value: "Tourism",
    });
    mainSector3.options.push(sub17);
    await mainSector3.save();

    const sub18 = await SubSector.create({
      label: "Translation services",
      value: "Translation services",
    });
    mainSector3.options.push(sub18);
    await mainSector3.save();

    const sub19 = await SubSector.create({
      label: "Transport and Logistics",
      value: "Transport and Logistics",
    });
    mainSector3.options.push(sub19);
    await mainSector3.save();

    const field54 = await Field.create({
      label: "Air",
      value: "Air",
    });
    sub19.options.push(field54);
    await sub19.save();

    const field55 = await Field.create({
      label: "Rail",
      value: "Rail",
    });
    sub19.options.push(field55);
    await sub19.save();

    const field56 = await Field.create({
      label: "Road",
      value: "Road",
    });
    sub19.options.push(field56);
    await sub19.save();

    const field57 = await Field.create({
      label: "Water",
      value: "Water",
    });
    sub19.options.push(field57);
    await sub19.save();

    console.log("All sectors seeded");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    console.log("closing db connection");
    await mongoose.disconnect();
    console.log("db connection closed");
  }
}

seed();
