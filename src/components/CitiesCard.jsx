import React from "react";

const CitiesCard = ({ cities }) => {
  return cities ? (
    <div className="container">
      {cities !== "no results" ? (
        <div className="card-container">
          {cities.map((city) => (
            <div className="card" key={city.RecordNumber}>
              <h5 className="card-header">{`${city.City}, ${city.Country}`}</h5>
              <div className="card-body">
                <p className="card-text">State:{city.State}</p>
                <p className="card-text">
                  Location: ({city.Lat}, {city.Long})
                </p>
                <p className="card-text">
                  Population (estimate): {city.EstimatedPopulation}
                </p>
                <p className="card-text">Total Wages: {city.TotalWages}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-header">
          <h5>No Results</h5>
        </div>
      )}
    </div>
  ) : (
    <div className="container card-header">
      <h5>Enter A Zip to See Matching Cities</h5>
    </div>
  );
};

export default CitiesCard;
