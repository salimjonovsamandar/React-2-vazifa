import "./style.css";
import data from "./data.json";

export default function Index() {
  return (
    <div className="block">
      {data.map((element) => {
        return (
          <div className="cardText">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p class="title">GO TO THE MAIN PART</p>
                </div>
                <div class="flip-card-back">
                  <div className="block__card">
                    <div className="name">
                      <h3>Name:</h3>
                      <p>{element.name}</p>
                    </div>
                    <div className="userName">
                      <h3>User name:</h3>
                      <p>{element.username}</p>
                    </div>
                    <div className="email">
                      <h3>Email:</h3>
                      <p>{element.email}</p>
                    </div>
                    <div className="tel">
                      <h3>Phone number:</h3>
                      <p>{element.phone}</p>
                    </div>
                    <div className="webSite">
                      <h3>Web site:</h3>
                      <p>{element.website}</p>
                    </div>
                    <div className="name">
                      <h3>Street:</h3>
                      <p>{element.address.street}</p>
                    </div>
                    <div className="name">
                      <h3>Suite:</h3>
                      <p>{element.address.suite}</p>
                    </div>
                    <div className="name">
                      <h3>City:</h3>
                      <p>{element.address.city}</p>
                    </div>
                    <div className="name">
                      <h3>Company name:</h3>
                      <p>{element.company.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
