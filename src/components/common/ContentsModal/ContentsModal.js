import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./ContentsModal.scss";

import addpic from "images/addpic.png";

function ContentsModal({
  modalType,
  editContents,
  isEnded,
  boardId,
  closeModal,
  postVoteContents,
  updateVoteContents,
  deleteVoteContents,
}) {
  const [img, setImage] = useState(null);
  const [name, setName] = useState(
    modalType === "add" ? "" : editContents.title
  );
  const [previewURL, setPreview] = useState(
    modalType === "add" ? "" : editContents.image
  );

  let fileInput = React.createRef();

  const selectImg = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(file);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onClickSelect = (e) => {
    fileInput.current.click();
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const postContents = () => {
    if (!img) {
      alert("사진을 추가해주세요");
    } else if (name === "") {
      alert("이름을 입력해주세요");
    } else {
      const formData = new FormData();
      formData.append("boardid", boardId);
      formData.append("title", name);
      formData.append("image", img);
      postVoteContents(isEnded, formData);
      closeModal();
    }
  };

  const updateContents = () => {
    console.log(img);
    if (name === "") {
      alert("이름을 입력해주세요");
    } else {
      const formData = new FormData();
      formData.append("title", name);
      if (img) formData.append("image", img);
      updateVoteContents(isEnded, editContents.id, formData);
      closeModal();
    }
  };

  const deleteContents = () => {
    if (window.confirm("항목을 삭제하시겠습니까?")) {
      deleteVoteContents(isEnded, editContents.id);
      closeModal();
    }
  };

  return (
    <div className="contents-modal">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          item
          container
          className="title-bar"
          justify="space-between"
          alignItems="center"
        >
          <Grid item className="title">
            항목 {modalType==="add"?"추가":"수정"}하기
          </Grid>
          <Grid item className="close-button">
            <button onClick={closeModal}>X</button>
          </Grid>
        </Grid>
        <Grid item className="contents">
          <div className="pic-background" onClick={onClickSelect}>
            {previewURL !== "" ? (
              <img className="preview" src={previewURL} alt="preview" />
            ) : (
              <span className="pic-text">
                <img className="add-pic" src={addpic} alt="addpic" />
                사진 추가
              </span>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInput}
              onChange={selectImg}
            />
          </div>
          <div className="name">
            <span className="label">이름</span>
            <input type="text" value={name} onChange={onChangeName} />
          </div>
        </Grid>
        <Grid item className="button-area">
          {modalType === "edit" && (
            <button className="delete-button" onClick={deleteContents}>
              삭제
            </button>
          )}
          <button
            className="post-button"
            onClick={modalType === "add" ? postContents : updateContents}
          >
            {modalType === "add" ? "추가" : "수정"}
          </button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContentsModal;
