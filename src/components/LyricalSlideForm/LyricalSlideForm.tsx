// import * as Quill from "quill";
import React, { FunctionComponent, useState } from "react";
import {
    Card,
    Form,
    Grid,
    Input,
    InputOnChangeData,
    TextArea,
    TextAreaProps,
} from "semantic-ui-react";

interface IProps {
    onChange: (title: string, lyrics: string[]) => void;
}

const LyricalSlideForm: FunctionComponent<IProps> = ({ onChange }) => {
    const [lyrics, setLyrics] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");

    const handleLyricsOnChange = (
        e: React.FormEvent<HTMLTextAreaElement>,
        data: TextAreaProps
    ) => {
        const splitLyrics = (data.value as string).split("\n\n");
        setLyrics(splitLyrics);
        onChange(title, splitLyrics);
    };

    const handleTitleOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        data: InputOnChangeData
    ) => {
        setTitle(data.value as string);
    };

    return (
        <Grid>
            <Grid.Column width={5}>
                <Form>
                    <Form.Field>
                        <Input
                            placeholder="Song title"
                            onChange={handleTitleOnChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <TextArea
                            placeholder="Paste your lyrics here"
                            onChange={handleLyricsOnChange}
                            style={{ minHeight: 500 }}
                        />
                    </Form.Field>
                </Form>
            </Grid.Column>
            <Grid.Column width={10}>
                {lyrics.map((lyric, cardIndex) => {
                    return (
                        <Card fluid key={cardIndex}>
                            <Card.Content>
                                {lyric
                                    .split("\n")
                                    .map((line, descriptionIndex) => {
                                        return (
                                            <Card.Description
                                                textAlign="center"
                                                key={descriptionIndex}
                                            >
                                                {line}
                                            </Card.Description>
                                        );
                                    })}
                            </Card.Content>
                        </Card>
                    );
                })}
            </Grid.Column>
        </Grid>
    );
};

export default LyricalSlideForm;
