import { React, Component } from "react";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import { Col, Card } from "react-bootstrap";


export class Video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <>
        <div>
          <div>
            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId={this.props.id}
              onClose={() => this.setState({ isOpen: false })}
            />
            <div onClick={this.openModal}>
              <Col>
                <Card>
                  <Card.Img
                    style={{cursor:'pointer'}}
                    onClick={this.openModal}
                    variant="top"
                    src={this.props.src}
                  />
                </Card>
              </Col>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Video;
