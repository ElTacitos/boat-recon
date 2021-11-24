export const boats = [
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="red"/>' +
            '<circle cx="50" cy="80" r="10" fill="red"/>',
        type: "Non maitre",
    },
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="red"/>' +
            '<circle cx="50" cy="80" r="10" fill="white"/>',
        type: "Navire Peche",
    },
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="white"/>' +
            '<circle cx="50" cy="80" r="10" fill="red"/>',
        type: "Navire Pilote",
    },
    {
        svg: '<circle cx="50" cy="30" r="10" fill="white" />\n',
        type: "Mouillage -50m",
    },
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="white" />\n' +
            '<circle cx="50" cy="50" r="10" fill="white" />',
        type: "Mouillage +50m",
    },
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="white" />\n' +
            '<circle cx="50" cy="40" r="10" fill="red" />\n' +
            '<circle cx="50" cy="60" r="10" fill="red" />\n' +
            '<circle cx="50" cy="80" r="10" fill="white" />',
        type: "Echoué +50m",
    },
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="white" />\n' +
            '<circle cx="50" cy="40" r="10" fill="red" />\n' +
            '<circle cx="50" cy="60" r="10" fill="red" />',
        type: "Echoué -50m",
    },
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="green"/>' +
            '<circle cx="50" cy="80" r="10" fill="white"/>',
        type: "Chalutier",
    },
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="red"/>\n' +
            '<circle cx="50" cy="50" r="10" fill="red"/>\n' +
            '<circle cx="50" cy="80" r="10" fill="red"/>',
        type: "Navire Handicap",
    },
    {
        svg:
            '<circle cx="50" cy="20" r="10" fill="red"/>\n' +
            '<circle cx="50" cy="50" r="10" fill="white"/>\n' +
            '<circle cx="50" cy="80" r="10" fill="red"/>',
        type: "CMR",
    },
    {
        svg:
            '<circle cx="50" cy="30" r="10" fill="white"/>\n' +
            '<circle cx="30" cy="70" r="10" fill="green"/>\n' +
            '<circle cx="70" cy="70" r="10" fill="red"/>',
        type: "Prop Meca",
    },
    {
        svg: '<circle cx="50" cy="50" r="10" fill="green"/>',
        type: "Voilier Td",
    },
    {
        svg: '<circle cx="50" cy="50" r="10" fill="red"/>',
        type: "Voilier Bd",
    },
    {
        svg:
            '<circle cx="30" cy="50" r="10" fill="green"/>\n' +
            '<circle cx="70" cy="50" r="10" fill="red"/>',
        type: "Voilier face",
    },
    {
        svg:
            '<circle cx="50" cy="15" r="10" fill="white" />\n' +
            '<circle cx="50" cy="40" r="10" fill="white" />\n' +
            '<circle cx="50" cy="65" r="10" fill="white" />\n' +
            '<circle cx="25" cy="85" r="10" fill="green"/>\n' +
            '<circle cx="75" cy="85" r="10" fill="red"/>',
        type: "Remorqueur",
    },
    {
        svg:
            '<circle cx="50" cy="30" r="10" fill="green"/>\n' +
            '<circle cx="30" cy="70" r="10" fill="green"/>\n' +
            '<circle cx="70" cy="70" r="10" fill="green"/>',
        type: "Demineur",
    },
    {
        svg:
            '<circle cx="50" cy="30" r="10" fill="black"/>\n' +
            '<circle cx="30" cy="70" r="10" fill="black"/>\n' +
            '<circle cx="70" cy="70" r="10" fill="black"/>',
        type: "Demineur",
    },
    {
        svg:
            '<circle cx="50" cy="10" r="10" fill="red" />\n' +
            '<circle cx="50" cy="30" r="10" fill="white" />\n' +
            '<circle cx="50" cy="50" r="10" fill="red" />\n' +
            '<circle cx="25" cy="70" r="10" fill="green"/>\n' +
            '<circle cx="25" cy="90" r="10" fill="green"/>\n' +
            '<circle cx="75" cy="70" r="10" fill="red"/>\n' +
            '<circle cx="75" cy="90" r="10" fill="red"/>',
        type: "Drageur Gauche",
    },
    {
        svg:
            '<circle cx="50" cy="10" r="10" fill="red" />\n' +
            '<circle cx="50" cy="30" r="10" fill="white" />\n' +
            '<circle cx="50" cy="50" r="10" fill="red" />\n' +
            '<circle cx="25" cy="70" r="10" fill="red"/>\n' +
            '<circle cx="25" cy="90" r="10" fill="red"/>\n' +
            '<circle cx="75" cy="70" r="10" fill="green"/>\n' +
            '<circle cx="75" cy="90" r="10" fill="green"/>',
        type: "Drageur Droit",
    },
    {
        svg:
            '<circle cx="50" cy="25" r="10" fill="black" />\n' +
            '<rect transform="rotate(45 50 50)" height="20" width="20" y="40" x="40" fill="black"/>\n' +
            '<circle cx="50" cy="75" r="10" fill="black" />',
        type: "CMR",
    },
    {
        svg:
            '<circle cx="50" cy="35" r="10" fill="black" />\n' +
            '<circle cx="50" cy="65" r="10" fill="black" />',
        type: "Non Maitre",
    },
    {
        svg:
            '<rect height="80" width="2" y="10" x="49" fill="black"/>\n' +
            '<rect height="40" width="20" y="30" x="40" fill="black"/>',
        type: "Handicapé",
    },
    {
        svg: '<polygon fill="black" points="50,10 90,90 10,90" transform="rotate(-45,30,60)"/>',
        type: "Peche +150m",
    },
    {
        svg: '<path d="M 24.642 11.248 L 10.32 25.415 L 10.057 10.666 Z M -4.659 10.206 L 9.663 -3.961 L 9.927 10.788 Z" fill="black" transform="scale(3) translate(7,6)"/>',
        type: "Peche +20m",
    },
    {
        svg: '<polygon fill="black" points="50,10 90,90 10,90" transform="rotate(-135,45,60)"/>',
        type: "Voilier au moteur",
    },
    {
        svg:
            '<circle cx="50" cy="50" r="10" fill="black" />\n' +
            '<rect height="50" width="2" x="49" y="25" transform="rotate(-45,50,50)"/>',
        type: "Mouillage",
    },
    {
        svg:
            '<circle cx="50" cy="50" r="10" fill="black" />\n' +
            '<circle cx="30" cy="30" r="10" fill="black" />\n' +
            '<circle cx="70" cy="70" r="10" fill="black" />\n' +
            '<rect height="100" width="2" x="49" y="0" transform="rotate(-45,50,50)"/>\n',
        type: "Echoue",
    },
];
