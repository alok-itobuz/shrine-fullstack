import { PORT } from '../config/constants.js';
import * as conn from '../db/conn.js'
import Article from "../models/articleSchema.js";
import Event from "../models/eventSchema.js";
import Member from "../models/memberSchema.js";
import articles from "./articles.js";
import events from "./events.js";
import members from "./members.js";


async function importData() {
    try {
        await Article.create(articles)
        await Event.create(events)
        await Member.create(members)
    } catch (error) {
        console.log(error)
    }
}
async function deleteData() {
    try {
        await Article.deleteMany({})
        await Event.deleteMany({})
        await Member.deleteMany({})
    } catch (error) {
        console.log(error)
    }
}

if (process.argv[2] === '--import') await importData()
if (process.argv[2] === '--delete') await deleteData()
process.exit()