// import * as Quill from "quill";
import * as Quill from "quill";
import React, { FunctionComponent } from "react";
import ReactQuill from "react-quill";
import { Form } from "semantic-ui-react";
import { SlideTypes } from "../../models/Slide";
import { ISlideFormData } from "../CreateNewSlideModal/CreateNewSlideModal";

interface IProps {
    onChange: (slideFormData: ISlideFormData) => void;
}

const BasicSlideForm: FunctionComponent<IProps> = ({ onChange }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: ["", "right", "center"] },
            ],
            ["image"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "indent",
        "image",
        "align",
    ];

    const handleOnChange = (
        content: string,
        delta: any,
        source: Quill.Sources,
        // TODO: get type for UnpreviledgedEditor
        editor: any
    ) => {
        onChange({
            data: {
                textContent: editor.getHTML(),
            },
            slideType: SlideTypes.BASIC,
        });
    };

    return (
        <Form.Field>
            <ReactQuill
                modules={modules}
                formats={formats}
                onChange={handleOnChange}
            />
            {/* // TODO: Find a workaround for the 'not in range error' */}
            {/* <div className="text-edit-area" /> */}
        </Form.Field>
    );
};

export default BasicSlideForm;
