import { Router } from "express";

import { Film, NewFilm } from "../types";

const router = Router();

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Shang-Chi and the Legend of the Ten Rings",
    director: "Destin Daniel Cretton",
    duration: 132,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    description:
      "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    budget: 150,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    budget: 63,
  },
  {
    id: 3,
    title: "Summer Wars",
    director: "Mamoru Hosoda",
    duration: 114,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
    description:
      "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
    budget: 18.7,
  },
  {
    id: 4,
    title: "The Meyerowitz Stories",
    director: "Noah Baumbach",
    duration: 112,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
    description:
      "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
  },
  {
    id: 5,
    title: "her",
    director: "Spike Jonze",
    duration: 126,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
    description:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    budget: 23,
  },
];
// Read all films

router.get("/", (req, res) => {

  if (!req.query["minimum-duration"]) {
    return res.json(defaultFilms);    
  }
  const minDuration = Number(req.query["minimum-duration"]);

  if (isNaN(minDuration) || minDuration <= 0) {
    res.json("Wrong minimum Duration");
  }

  const filteredFilms = defaultFilms.filter((film) => film.duration >= minDuration);

  return res.json(filteredFilms);
});

router.get("/:id", (req, res) => {

  const id = Number(req.params.id);

  // verifier toujours si l'id est un nombre :
  if (isNaN(id)) {
    return res.json("Wrong minimum id");
  }

  const films = defaultFilms.find((film) => film.id === id);

  // verifier si l'id du film existe
  if (!films) {
    return res.json("Film not found -> wrong id");
  }

  return res.json(films);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.json("Wrong body information/format")
  }

  const newFilm = body as NewFilm;

  /* 
      REDUCE est utilisé pour trouver l'id maximum.
      - reduce prend une fonction qui s'applique à chaque élément de la liste (drink) en utilisant un accumulateur (maxId).
      - À chaque itération, cette fonction compare l'id de la boisson actuelle (drink.id) avec la valeur de l'accumulateur maxId.
      - Si l'id de la boisson actuelle est plus grand que maxId, alors maxId prend cette valeur (drink.id). Sinon, maxId conserve sa valeur.
      - La valeur initiale de maxId est définie à 0 dans reduce((maxId, drink) => ..., 0). Cela permet à maxId de commencer à 0, et si drinks est vide, maxId reste 0
      - Une fois que reduce a trouvé le plus grand id dans drinks, le code ajoute 1 pour créer le nextId, c'est-à-dire l'id du nouvel élément qui sera ajouté.
  */
  const nextId = defaultFilms.reduce((maxId,defaultFilms) => (defaultFilms.id > maxId ? defaultFilms.id : maxId),0) +1;

  //Fusion de Propriétés : crée un nouvel objet qui combine l'id généré (nextId) avec toutes les autres propriétés de newFilm
  const addFilm : Film = {id : nextId, ...newFilm};

  defaultFilms.push(addFilm);
  

  return res.json(addFilm);
});


export default router;
