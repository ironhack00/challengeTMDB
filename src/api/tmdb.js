import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BEARER_TOKEN = import.meta.env.VITE_API_KEY;

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${BEARER_TOKEN}`,
};

function handleAxiosError(error, contexto) {
  const status = error.response?.status;
  const message = error.response?.data?.status_message || error.message;
  throw new Error(
    `${contexto}: ${message} (Código: ${status || "desconocido"})`
  );
}

function checkApiKey() {
  if (!BEARER_TOKEN) {
    throw new Error("No se encontró VITE_API_KEY en las variables de entorno.");
  }
}

// 🔹 Películas populares
export async function fetchPopularMovies(page = 1) {
  checkApiKey();
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
      headers,
      params: { language: "es-ES", page },
    });
    return data.results;
  } catch (error) {
    handleAxiosError(error, "Error al obtener películas populares");
  }
}

// 🔹 Películas nuevas (en cartelera)
export async function fetchNewMovies(page = 1) {
  checkApiKey();
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/now_playing`, {
      headers,
      params: { language: "es-ES", page },
    });
    return data.results;
  } catch (error) {
    handleAxiosError(error, "Error al obtener películas nuevas");
  }
}

// 🔹 Tráiler de una película
export async function fetchMovieTrailer(movieId) {
  if (!Number.isInteger(movieId) || movieId <= 0) {
    throw new Error("El parámetro 'movieId' debe ser un entero positivo.");
  }
  checkApiKey();

  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
      headers,
      params: { language: "es-ES" },
    });

    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.warn(`No se pudo obtener el tráiler para la película ${movieId}.`);
    return null;
  }
}

// 🔹 Detalles del usuario
export async function fetchUserDetails({ session_id }) {
  if (!session_id || typeof session_id !== "string") {
    throw new Error("El parámetro 'session_id' debe ser una cadena no vacía.");
  }
  checkApiKey();

  try {
    const { data } = await axios.get(`${BASE_URL}/account`, {
      headers,
      params: { session_id },
    });
    return data; // { id, name, username, ... }
  } catch (error) {
    handleAxiosError(error, "Error al obtener datos del usuario");
  }
}

// 🔹 Géneros de películas
export async function fetchMovieGenres() {
  checkApiKey();
  try {
    const { data } = await axios.get(`${BASE_URL}/genre/movie/list`, {
      headers,
      params: { language: "es-ES" },
    });
    return data.genres; // [{ id, name }, ...]
  } catch (error) {
    handleAxiosError(error, "Error al obtener géneros de películas");
  }
}
