import {useState} from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div><Button primary onClick={handleClose}>I accept</Button></div>;
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>parghraph asdf</p>

    </Modal>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, metus eu semper suscipit,
                est ex dignissim orci, vitae lobortis sem diam at augue. Quisque luctus, nulla sit amet elementum
                venenatis, leo lectus commodo nisl, eu vulputate tortor justo aliquet odio. Sed erat lorem, pharetra
                vitae bibendum ut, posuere id justo. Nunc aliquet orci a ex semper, nec finibus eros vulputate. Aliquam
                cursus, sapien eu laoreet tempus, dui augue convallis leo, non imperdiet erat metus vitae libero.
                Quisque viverra metus vitae ipsum suscipit cursus. Aliquam erat volutpat. Donec nec arcu at tellus porta
                placerat. Nunc posuere vitae ligula ut pharetra. Quisque eu mattis turpis.
            </p>
        </div>
    );
}

export default ModalPage;
