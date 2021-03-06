var sqlite = require("sqlite");
var db;

drop();
//create();
//select();
//insert();
//display();
var title= "The Odyssey";
var author= "Homer (Translated by Robert Fagles)";
var year = 1997;
var category = "Adventure";
var price= 0.00;
var image = "/images/5.jpg";
var description = "Robert Fagles, winner of the PEN/Ralph Manheim Medal for Translation and a 1996 Academy Award in Literature from the American Academy of Arts and Letters, presents us with Homer’‘s best-loved and most accessible poem in a stunning modern-verse translation. \’’Sing to me of the man, Muse, the man of twists and turns driven time and again off course, once he had plundered the hallowed heights of Troy.\’’ So begins Robert Fagles’‘ magnificent translation of the Odyssey, which Jasper Griffin in the New York Times Book Review hails as \’’a distinguished achievement.\’’ If the Iliad is the world’‘s greatest war epic, the Odyssey is literature’‘s grandest evocation of an everyman’‘s journey through life. Odysseus’‘ reliance on his wit and wiliness for survival in his encounters with divine and natural forces during his ten-year voyage home to Ithaca after the Trojan War is at once a timeless human story and an individual test of moral endurance. In the myths and legends  retold here. Fagles has captured the energy and poetry of Homer’‘s original in a bold, contemporary idiom, and given us an Odyssey to read aloud, to savor, and to treasure for its sheer lyrical mastery. Renowned classicist Bernard Knox’‘s superb introduction and textual commentary provide insightful background information for the general reader and scholar alike, intensifying the strength of Fagles’‘s translation. This is an Odyssey to delight both the classicist and the general reader, to captivate a new generation of Homer’‘s students. This Penguin Classics Deluxe Edition features French flaps and deckle-edged paper. For more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.";

async function create() {
    try {
        db = await sqlite.open("./db.sqlite");
        await db.run("create table if not exists profile (username text unique, email text, password text)");
        
    } catch (e) { console.log(e); }
}
async function drop() {
    try {
        db = await sqlite.open("./db.sqlite");
        await db.run("DROP TABLE profile");
        await db.run("DROP TABLE comments");
    } catch (e) { console.log(e); }
}
async function insert() {
    try {
        db = await sqlite.open("./db.sqlite");
        await db.run("insert into books (title,author,year,category,description,price,image) values ('"+title+"','"+author+"', '"+year+"', '"+category+"','"+description+"', '"+price+"','"+image+"')");
    } catch (e) { console.log(e); }
}
async function select() {
    try {
        db = await sqlite.open("./db.sqlite");
        var as = await db.all("select * from profile");
        console.log(as);
    } catch (e) { console.log(e); }
}

