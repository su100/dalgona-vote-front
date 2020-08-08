import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./AddModal.scss";

import addpic from "images/addpic.png";

function Addmodal({ closeModal }) {
    const [img1, setImage1] = useState(null);
    const [img2, setImage2] = useState(null);
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [previewURL1, setPreview1] = useState("");
    const [previewURL2, setPreview2] = useState("");

    let fileInput1 = React.createRef();
    let fileInput2 = React.createRef();

    const selectImg = (name) => (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            if (name === "first") {
                console.log("first");

                setImage1(file);
                setPreview1(reader.result);
            } else {
                console.log("second");
                setImage2(file);
                setPreview2(reader.result);
            }
        };

        reader.readAsDataURL(file);
    };

    const onClickSelect = (name) => (e) => {
        if (name === "first") {
            fileInput1.current.click();
        } else {
            fileInput2.current.click();
        }
    };

    const onChangeName = (name) => (e) => {
        if (name === "first") {
            setName1(e.target.value);
        } else {
            setName2(e.target.value);
        }
    };

    return (
        <div className="add-modal">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid
                    item
                    container
                    className="title-bar"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item className="title">
                        투표 추가하기
                    </Grid>
                    <Grid item className="close-button">
                        <button onClick={closeModal}>X</button>
                    </Grid>
                </Grid>
                <Grid
                    item
                    className="contents"
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <div
                            className="pic-background"
                            onClick={onClickSelect("first")}
                        >
                            {previewURL1 !== "" ? (
                                <img
                                    className="preview"
                                    src={previewURL1}
                                    alt="preview"
                                />
                            ) : (
                                <span className="pic-text">
                                    <img
                                        className="add-pic"
                                        src={addpic}
                                        alt="addpic"
                                    />
                                    사진 추가
                                </span>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInput1}
                                onChange={selectImg("first")}
                            />
                        </div>
                        <div className="name">
                            <span className="label">이름</span>
                            <input
                                type="text"
                                onChange={onChangeName("first")}
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div
                            className="pic-background"
                            onClick={onClickSelect("second")}
                        >
                            {previewURL2 !== "" ? (
                                <img
                                    className="preview"
                                    src={previewURL2}
                                    alt="preview"
                                />
                            ) : (
                                <span className="pic-text">
                                    <img
                                        className="add-pic"
                                        src={addpic}
                                        alt="addpic"
                                    />
                                    사진 추가
                                </span>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInput2}
                                onChange={selectImg("second")}
                            />
                        </div>
                        <div className="name">
                            <span className="label">이름</span>
                            <input
                                type="text"
                                onChange={onChangeName("second")}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid item className="button-area">
                    <button className="cancel-button" onClick={closeModal}>
                        취소
                    </button>
                    <button className="post-button" onClick={closeModal}>
                        추가
                    </button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Addmodal;
