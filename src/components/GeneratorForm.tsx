import {
  Card,
  CardContent,
  Container,
  Divider,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Sync } from "@mui/icons-material/";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import { Box } from "@mui/system";
import { generatePassword } from "../utils/GeneratePassword";
import React, { useEffect, useState } from "react";
import { Node } from "typescript";

type Props = {};

const GeneratorForm = (props: Props) => {
  const [generatedPassword, setGeneratedPassword] = useState<string>(
    generatePassword(8)
  );
  const [isCopied, setCopied] = useState<boolean>(false);
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(true);

  const generate = (): void => {
    setCopied(false);
    setGeneratedPassword(generatePassword(passwordLength, includeSpecialChars));
  };
  const setLength = (value: number): void => {
    console.log(value);
    setPasswordLength(value);
  };
  useEffect(() => {
    generate();
  }, [passwordLength, includeSpecialChars]);

  const copyText = (event: any): void => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
  };

  return (
    <Container sx={{ p: 3 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Generate a strong password
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 3,
            }}
          >
            <OutlinedInput
              value={generatedPassword}
              endAdornment={
                <>
                  <InputAdornment position="end">
                    <IconButton onClick={generate}>
                      <Sync />
                    </IconButton>
                    <IconButton onClick={copyText}>
                      {isCopied ? (
                        <DoneIcon sx={{ color: "green" }} />
                      ) : (
                        <ContentCopyIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                </>
              }
            />
          </Box>

          <Box
            sx={{
              margin: "35px auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              // flexDirection: "row",
              // width: "100%",
            }}
          >
            <Typography>Password length</Typography>
            <Slider
              sx={{ width: "250px", mx: 3 }}
              min={6}
              max={32}
              step={1}
              marks
              defaultValue={12}
              // valueLabelDisplay="on"
              onChangeCommitted={(event: any, value: any): void => {
                setLength(value);
              }}
            />
            <Typography>{passwordLength}</Typography>
          </Box>
          <Box
            sx={{
              margin: "35px auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              // width: "100%",
            }}
          >
            <Typography sx={{ mr: 4 }}>Include special characters</Typography>
            <Switch
              checked={includeSpecialChars}
              onChange={(event: any) => {
                console.log(event.target.checked);
                setIncludeSpecialChars(event.target.checked);
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GeneratorForm;
