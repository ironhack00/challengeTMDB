import { useState, useEffect, useMemo } from "react";

export function useFetchMovies(fetchFunction, params = {}) {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const paramKey = useMemo(() => JSON.stringify(params), [params]);

  useEffect(() => {
    if (typeof fetchFunction !== "function") {
      setError("La función de la API no es válida.");
      setLoading(false);
      console.error("fetchFunction no es una función:", fetchFunction);
      return;
    }

    const fetchData = async () => {
      try {
        console.log(`Ejecutando ${fetchFunction.name} con parámetros:`, params);
        const result = await fetchFunction(params);
        console.log("Datos obtenidos:", result);
        setMovies(result);
      } catch (err) {
        const errorMessage =
          err.message || "Error desconocido al obtener datos de TMDB.";
        setError(errorMessage);
        console.error(`Error en ${fetchFunction.name}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, paramKey]);

  return { movies, loading, error };
}
