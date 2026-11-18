import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../assets/hero.png";
import WatchCounter from "../components/WatchCounter";

function HomePage() {
  return (
    <Container className="py-5 text-center">
      <img
        src={heroImage}
        alt="Rick and Morty logo"
        className="img-fluid d-block mx-auto my-4"
        style={{ maxWidth: "600px" }}
      />
      <Row className="justify-content-center">
        <Col md={10} lg={7}>
          <h1>Watch Rick and Morty</h1>
          <p>
            I'll be completely honest. I don't know anything about this show...
            But! I was giving an assignment to create a website about Rick and
            Morty so here I am making a website about a show that I know nothing
            about.{" "}
          </p>
          <p>
            Of course, now I have the perfect opportunity to learn more about
            the show. I'll be starting from the beginning and I'm inviting you,
            Yes YOU, to watch along. As I watch, I’ll share what I discover,
            what surprises me, and probably a few theories I can’t resist
            writing about. Whether you’re a longtime fan or just as new to the
            show as I am, there’s room for you here.
          </p>
          <WatchCounter />
          <p>Ready to join?</p>
          <a
            href="https://www.hulu.com/series/rick-and-morty-d76d6361-3fbf-4842-8dd7-e05520557280?&cmp=7958&utm_source=google&utm_medium=cpc&utm_campaign=BM+Search+TV+Shows&utm_term=rick%20and%20morty&gclsrc=aw.ds&gad_source=1&gad_campaignid=23234629333&gbraid=0AAAAADoVW81YgRhp_qI0uF_Gy86XkQHWe&gclid=Cj0KCQiA8OrXBhDEARIsAECtlx48iJ7x3E0GSrLEem60zPM-BPiFD6W4yuFMw6DmgxLgdpB3FzTKdpYaAlpYEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="watch-btn">Watch With me!</button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
