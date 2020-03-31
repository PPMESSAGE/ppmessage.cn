import React from 'react'

import "./stackgallery.css"

// images: [{src: }]
// children is modal detail

class StackGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlight_item: 0
        }
    }

    clickImage(image, e) {
        console.log("clickImage", image);
        let _id = image.image_id;
        _id = (_id + 1) % this.props.images.length;
        this.setState({highlight_item: _id});
    }

    
    render() {

        this.props.images.map((image, i) => {
            image.image_id = i;
            return image;
        });
        

        let image_list = this.props.images.map((image, i) => {
            let _image_class = "";

            if (this.state.highlight_item === i) {
                _image_class = "stack-gallery-image-1";
            } else {
                _image_class = "stack-gallery-image-" + (i + 1)
            }
            
            return (<img className={_image_class}
                         src={image.src}
                         alt={image.alt}
                         key={image.image_id}
                         onClick={this.clickImage.bind(this, image)} />);
        });
        
        return (
            <div className="stack-gallery">
                <div>
                    <img className="stack-gallery-image" src={this.props.images[0].src} alt={this.props.images[0].alt} />
                    {image_list}
                </div>
            </div>
        )
    }
}

export default StackGallery
