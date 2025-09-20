import { Suspense } from "react";
import "./App.css";
import Countries from "./component/Countries/countries";

const countriesPromies = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <Countries countriesPromies={countriesPromies}></Countries>
      </Suspense>
    </>
  );
}

export default App;
