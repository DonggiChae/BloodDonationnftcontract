import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { API } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { createRequestPage } from "../../graphql/mutations";

import Button from "../atoms/Button";

import { isValidAddress } from "../../utils/crypto";

const Table = styled.div`
  height: 100%;
  .inputWrapper {
    position: relative;
    margin: 10px;
  }
  .input_bottomBorder {
    display: block;
    width: 100%;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    line-height: 1.5;
    border: none;
    border-radius: 0px;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
    font-size: 1.1em;
    font-weight: 600;
    &:focus {
      outline: none;
      border-bottom: 1.8px solid ${({ theme }) => theme.colors.buttonOrange};
    }
  }
  .input_submit {
    margin: 10px;
    padding: 0.375rem 0.75rem;
    border: 1.5px solid rgba(0, 0, 0, 1);
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: $dark-brown;
      color: $white;
    }
  }
  .StyledTextarea {
    width: 98%;
    height: 280px;
    margin-left: 8px;
    line-height: 1.5;
    padding: 0.7rem 1rem;
    font-size: 1.1em;
    font-weight: 600;
    border: none;
    resize: none;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
    &:focus {
      outline: none;
      border-bottom: 1.8px solid ${({ theme }) => theme.colors.buttonOrange};
    }
    &::placeholder {
      font-size: 1.1em;
    }
  }
`;

const ErrorMsg = styled.span`
  position: absolute;
  top: 35px;
  left: 20px;
  color: red;
  font-size: 12px;
  z-index: 10;
  height: 10px;
  margin: 0;
  padding: 0;
`;

const ErrorMsgTextBox = styled.span`
  position: absolute;
  top: 260px;
  left: 20px;
  color: red;
  font-size: 12px;
  z-index: 10;
  height: 10px;
  margin: 0;
  padding: 0;
`;

const TableBottom = styled.div`
  display: grid;
  padding: 10px 10px 10px 20px;
  grid-template-columns: 6fr 1fr;
`;

export default function RequestCreate() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (isValidAddress(data.walletAddr)) {
      let d = new Date();
      API.graphql({
        query: createRequestPage,
        variables: {
          input: {
            title: data.title,
            description: data.description,
            at: new Date(
              d.getTime() - d.getTimezoneOffset() * 60000
            ).toISOString(),
            state: "?????????",
            walletAddr: data.walletAddr,
            user: user.username,
            type: "require",
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })
        .then(() => {
          toast.success("??????????????? ?????????????????????.", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/requestdonation");
        })
        .catch((error) => {
          toast.error(error.errors[0].message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } else {
      toast.error("???????????? ?????? ?????????????????????.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <Table>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputWrapper">
          <input
            className="input_bottomBorder"
            id="title"
            type="text"
            placeholder="??????"
            {...register("title", {
              required: true,
              minLength: {
                value: 4,
                message: "???????????? ???????????????.",
              },
              maxLength: {
                value: 30,
                message: "???????????? ????????????.",
              },
            })}
          />
          <ErrorMsg>{errors?.title && errors?.title?.message}</ErrorMsg>
        </div>
        <div className="inputWrapper">
          <input
            className="input_bottomBorder"
            id="walletAddr"
            placeholder="?????? ????????????"
            {...register("walletAddr", {
              required: true,
              minLength: {
                value: 42,
                message: "???????????? ???????????????.",
              },
              maxLength: {
                value: 42,
                message: "???????????? ????????????.",
              },
            })}
          />
          <ErrorMsg>
            {errors?.walletAddr && errors?.walletAddr?.message}
          </ErrorMsg>
        </div>
        <div className="inputWrapper">
          <textarea
            className="StyledTextarea"
            id="description"
            placeholder="?????? ??????"
            {...register("description", {
              required: true,
              minLength: {
                value: 10,
                message: "???????????? ???????????????.",
              },
              maxLength: {
                value: 500,
                message: "???????????? ????????????.",
              },
            })}
          />
          <ErrorMsgTextBox>
            {errors?.description && errors?.description?.message}
          </ErrorMsgTextBox>
        </div>

        <TableBottom>
          <input
            className="input_submit"
            value={"????????????"}
            type="submit"
            disabled={isSubmitting}
          />
          <Button title={"??????"} onClick={() => navigate("/requestdonation")} />
        </TableBottom>
      </form>
    </Table>
  );
}
