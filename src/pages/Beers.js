import useFetch from "../repositories/beers";
import {useCallback, useEffect, useRef, useState} from "react";

export function Beers() {
  const [page, setPage] = useState(1);
  const { beerList } = useFetch(page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    console.log(target)
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="mb-12">
      <h1 className="text-3xl text-center mt-8">Mes super bières</h1>
      { beerList && (
        <div className="w-full flex flex-wrap gap-8 mt-8 justify-center items-center">
          {beerList.map((beer, index) => <div key={index} className="shadow p-5 flex w-1/3">
            <div className="w-3/4">
              <h3 className="font-bold text-xl">{beer.name}</h3>
              <span className="text-gray-400 text-sm -mt-2">{beer.tagline}</span>
              <div className="mt-4 text-sm overflow-ellipsis overflow-hidden">{beer.description}</div>
            </div>
            <div className="w-1/4 h-56">
              <img src={beer.image_url} alt={beer.name} className="w-full h-full object-contain"/>
            </div>
          </div>)}
        </div>
      )}
      <div className="w-0 h-0" ref={loader} />
    </div>
  )
}
