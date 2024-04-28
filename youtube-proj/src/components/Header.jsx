import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction, toggleSuggestion } from "../utils/toggleSlice";
import { Youtube_Search_Suggestion, Searchbar_api } from "../constant";
import { onAddData } from "../utils/searchCachingSlice";
import { updateSearchedData } from "../utils/searchDataSlice";

const Header = () => {
  const dispatch = useDispatch();
  const selection = useSelector((store) => store.sidebar.isShowing);
  const cacheData = useSelector((store) => store.searchCache.dataSaved);
  console.log("cacheData", cacheData);
  console.log("store", selection);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  const [suggestion, setSuggestions] = useState();
  const [searched, setSearchedData] = useState();

  const handleToggleDispatch = () => {
    console.log("going to dispathc");
    dispatch(toggleAction());
  };
  useEffect(() => {
    console.log("dispatch running");
    // dispatch(updateSearchedData({}));
    const timer = setTimeout(() => {
      if (cacheData[searchQuery]) {
        setSuggestions(cacheData[searchQuery]);
      } else {
        fetchSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleChangeSuggestion = (booleanData) => {
    dispatch(toggleSuggestion(booleanData));
  };

  const fetchSearchSuggestion = async () => {
    const data = await fetch(Youtube_Search_Suggestion + searchQuery);
    const json = await data.json();
    console.log("fetch suggestions", json[1]);
    dispatch(onAddData({ [searchQuery]: json[1] }));
    setSuggestions(json[1]);
  };
  const searchKeyword = async () => {
    const noSpaces = searchQuery.replace(/\\s+/g, "");
    const data2 = await fetch(Searchbar_api + noSpaces);
    const json2 = await data2.json();
    console.log("json2", json2);
    dispatch(updateSearchedData(json2));
  };
  return (
    <>
      <div className="w-full h-24">
        <div className="w-full h-auto flex justify-between pt-4 p-2 shadow-xl fixed bg-white">
          <div className="flex items-center gap-6">
            <img
              onClick={() => handleToggleDispatch()}
              className="w-8 h-6 cursor-pointer"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAD7+/sBAQH+/v78/Pz9/f1LS0uWlpbPz8/Ly8uTk5P19fVNTU0wMDDW1tbr6+u7u7s4ODg9PT2hoaHFxcWKiopbW1t+fn55eXm1tbXx8fFZWVmIiIhoaGhSUlJycnLf398VFRWoqKghsLFeAAAIyElEQVR4nOVdiXajOgwVCZA0oVmbJtPOdP3/f3wJAcJmScab4PmcOWU6F6xrWZawNAYSyFsyS+8Xs1mc/4xns/sv0lkbkhQQDrYDiUuIZSwipglBoLB2hE5Nxlb/zkG9WNaKBjY2IQgUtocgX9uWNDhj9mJH6ABTNIeIXGTMCCYtgt5s0NcUbWK9Ce1vkWmJKdEG4x4NDhdTsg0auYmWQ5Rkg30aNPBm3oU2W2TYXT+wXIJB3YRRROmQYHA3AeXYOhLaLBa1EMlU2NHYoEOC4wvVGtgp2+AdK3CKWh5bjV7cEjRz9FYIDuklWKj2wLolGCxUq2H9CB3GTZTYSbkJDwQluYkCO/UpCjB5gqC6c6xv9E4JCrRBNUEZoRq7awxrr5cAoRpLTOrOkYZqDaz7eRJuFVUQnI6buGMFuAlXq2iBna6bqLAWhZbwRi+PoFsb7BCcTqj26NqYYNg3eoaYLoQWZIM5ltNLPYiV0wqpLBAEyE6v5+eFpPZ8fj3NWAQ7We6u7mH3J5LZ/uw405me3OviefP5vLyIqAsGdm4Du05T2l6JKZotSDp9EjGwOs9V/ssiMya40eHlR3EN6psZTjAmpmjy0KAr6U0HbhHjHqqlwRZBeOUTDKbKNemCETfxrUPHp+IakO90KMEUvoJLz3nuFygIQptga4qmSeZEIttqj6IZpkFAAkLYUw+3vPT3EGRh9xhBwCLeC9V/OMU1sBf1FK1af5i+CCK9/uMW2IsMRhA2QVcQPnaDvdWpp2jOkGkIXIgje92oq2SJurYDoxcJC+0BeX9IQDlFr+0cuZJeBRk0cNEZmgRjLkF4IQUJ6iaqny8EQeXGSLylRi+0myiIbjGCeF3bjwuJrA/Gj8oG6x5fsRfw5kIiy6qMojdMg6CywcLBHKXaYA17NCEIhSX2D7AAG7z93GJTlKxrg9+w0jO6fkM1SNe1FRRDrCA87C9BMKU3HE9zY6NhQAba6/xEEEw4O6rvjw1hKYor25933AYbIQ224bhbHmuPFdLmx+V7XUxljoiZXdptn55Wq6e8lT/RCwbEBPv0tOsTs4cgkBqs3iSrLWTkggHRwdIQRjlP828SihCGdD2coPAcPUdMcQStlxKgdwqvkzEv+xpDjp4hpqhySie1EkOWJxF1Mmw9yKyTYXfNwQ4dmlHYoCuC3jQ4nOD43IRaD8PvlB3J4HVtEwjV+su+Ai4yTqs+J2CDBNa9BpmC6GE1xHQVqvEHwzFBUPYyCRvECAawQXbXWmIOHpoxuIkcEpign/8cIGOKOtT2pKfo/4JgJ8s9HTdRYjVflaU1xmA0/6Yamuz0slwv722NXDAgazYEwy5fTpk9gvH+b+hEU2/7u08gpQimxa9bTGsEY1gdI6FZ7uhwIgnOaIKv9iSyjb3++UcRTIgpGsOHE+lVEP2B+zAlSJQJC6hru1AHlOJuYk8NsKspyhiD8jdvgBIEdBXNHEhkezCiKEMJAkYQ1g4ksq/K9XCCYKN/N9QbWA7B/lBtJVhx9V+ssNAW0+DVFYaXntP1GquSxQjCJ7bAk7LqLf062PYvPpVVslRd2yGiRk/EQhsdUGPD8lLK/z8qoa6tptINupogb5KlDsWvNgdkigKoCc6udqjohezfr71+IhosW/+b5GvzmbIUV7tYDyV484chVxA2djWU4C2mEW+Dt/Z4f+jZ/EMJXuNSuYp7XKy7BGsbeihBeI9CS8/pOkvwHUs0q7F3IZFlte/Vdc4kweudrXd8UlbzpV91ofqXS4dgawOe2nD8GDrSDF42ZvGH2qMXm+rkjmp5cITM1eYfSRAogsV+qUw3cVx1CHZzRATB253x/hxJbOd9SiwyHA0Wd97yFo4zEZpJkDxv0XETPVk+WoPFXJXYuKlJvQSo26IhJ3laSQlQJ+U8klLYZrUSqrEVRNBRpl1OGYmrWgkxBN1MUZqgf6FtF4OQvYyCICbm4KGRZINU15Y1KO8waUlCO6m8dreKeiJIiinKTTiwQcDzUhaEDk5QJchI3MRwghNxEwCq01sm4iZyCFtotiBy3ESJnWSo1ktwijaYY8M5eg82mGOn6yYqrAWCAkM1ZwQ9uQnPGpQ9RRMuwbQcjVh9wYDoYGkISw/AGpr7OVFeD4KisNvdVXLeRGM4eqlnfakOw1IQVK6M8s9rA4wg9GiwaemnxxOt5N2tYucnekGibPA3kl1T80J/WRy3wV6CYrLct/ZrRnDbnULiVLk1IdhzojfLVrza6xGPMXCCb7JtsLh4674g1ZYVlOD9LOig0nO6/iGOt0QIVqcI+19BdAajOM9bn2DccyY7KWsIey3OZFdFn1he6kyNXkDF1S/OGMGHx++JYg8CpOdgD+opWrX+95BNsxeSl2c3UV1shhIc0TdK1G+AMUYQFgGW/iHYBXb6I0YQLiOwwVu7EKc/qvcC9rWvZGgQZGD5j+Ng99AimDAJxln1KM/TTkvJ5Te7VG+AaNrmy4VEtu01+kKnKF7X9u1CIsuDEUXfKEGirm0tVXEVJLr/V250oxAhCPGCsYJYll7vcbdPkqkXGZLgaL5DimzAEwSTOHvmE2QMBn+8ONgoes5wDbLq2pZodwEX2mtbEjZIftPqfqfobzrjUzS/YKR4hH6XO2uJqUhssXJYILiRqbaxJ0DpRPRIEqDsrrtYeQRtJaLrWe5x1skwsfpDI9EGsa4dCi3mmwOipqiLcp5JuYle7NSnKNBfJRutm1BURU3ITTggaGaDrmoGXQgtIVRT1LWNpJxSTw8UQRuWHtAGc6z1UE2Mm7BKUIYf7O9agJtwXHkd3k04tcGqTWCKiiXoKlRTEJxOqPboWnUnkHeKDtVqXVsTOmiohnc9tlBNW8yphmoPyERDtRp2nG5Cp2s/vdifokBhzQkKD9UqiLnQZho0NH+GmGEIOg/Vmo8bnw1qiuk/VPO3yAwmKPx1qfW4cdigiR4m6yYqMYcLPYop6p2gt1Dt8Tg/vQRyE1B4/EFCm30C2KcL/g/VwRktWEYO8wAAAABJRU5ErkJggg=="
            />
            <img
              className="w-24"
              src={
                "data:image/png;base64,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"
              }
              alt="Youtube Logo"
            />
          </div>
          <div className="flex flex-col">
            <div className="">
              <form
                className="flex items-center"
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("till here");
                  searchKeyword();
                }}
              >
                <input
                  className="w-96 border-2 border-grey rounded-l-full h-10 pl-4 placeholder-pl-4"
                  type="text"
                  placeholder="Search"
                  onFocus={() => {
                    handleChangeSuggestion(true);
                  }}
                  onBlur={() => {
                    handleChangeSuggestion(false);
                  }}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                />

                <button className="border-2 border-grey w-16 rounded-r-full h-10">
                  <img
                    className="w-7  items-center "
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </button>
              </form>
            </div>
            <div className="bg-white shadow-xl rounded-lg w-96 h-auto fixed top-16">
              {selection &&
                suggestion &&
                suggestion.map((x) => (
                  <>
                    <div className="m-4 ">
                      <p className="p-2 border-b-2 text-black font-medium">
                        🔍 {x}
                      </p>
                    </div>
                  </>
                ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-10 h-10 text-center"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
