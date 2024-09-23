"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Header_1 = require("./components/Header.js");
var Experiences_1 = require("./components/Experiences.js");
var Contact_1 = require("./components/Contact.js");
var Projects_1 = require("./components/Projects.js");
var CreateProject_1 = require("./components/CreateProject.js");
var ContactForm_1 = require("./components/ContactForm.js");
function App() {
    // Student-objekt som inneholder alle nødvendige data
    var student = {
        name: 'Halgeir Geirson',
        degree: 'Bachelor IT',
        points: 180,
        email: 'student@hiof.no',
        experiences: [
            { name: 'Figma UI for customer X' },
            { name: 'Website for customer Y' }
        ]
    };
    // Prosjektliste med useState
    var _a = (0, react_1.useState)([
        { title: 'Prosjekt 1', description: 'Beskrivelse av prosjekt 1' },
        { title: 'Prosjekt 2', description: 'Beskrivelse av prosjekt 2' },
    ]), projects = _a[0], setProjects = _a[1];
    // Funksjon for å legge til nye prosjekter
    var addProject = function (newProject) {
        setProjects(__spreadArray(__spreadArray([], projects, true), [newProject], false));
    };
    // Funksjon for å fjerne et prosjekt basert på index
    var removeProject = function (index) {
        setProjects(projects.filter(function (_, i) { return i !== index; }));
    };
    return (<div>
            <Header_1.default student={student.name} degree={student.degree} points={student.points}/>
            <Experiences_1.default experiences={student.experiences}/>
            <Contact_1.default email={student.email}/>
            <ContactForm_1.default /> {/* Legger til kontaktformularet */}
            <Projects_1.default projects={projects} removeProject={removeProject}/>
            <CreateProject_1.default addProject={addProject}/>
        </div>);
}
exports.default = App;
