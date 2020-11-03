import React, { useState } from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "../images/avatar.svg"
import hoverAvatar from "../images/hover_avatar.svg"

const SectionTitle = styled.h2`
  color: #00343d;
  margin: 0 auto;
  max-width: 39rem;
  padding: 2rem; 0.5rem 0;
  text-align: center;
`

const Wrapper = styled.div`
  margin: 5rem auto 10rem;
  max-width: 35rem;
  min-height: 25rem;
  padding: 0 1.5rem;
  text-align: center;
`

const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FieldWrapper = styled.p`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: ${props => (props.last ? "0" : "0.5rem")};
  width: 100%;
`
const Label = styled.label`
  color: #2833478a;
  margin-bottom: 0.75rem;
`
const Input = styled.input`
  background-color: white;
  background-clip: padding-box;
  border: solid 1px #e6ecf8;
  border-radius: 6px;
  box-shadow: none;
  padding: 0.5rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 275px;
  }
`
const TextArea = styled.textarea`
  background-color: white;
  background-clip: padding-box;
  border: solid 1px #e6ecf8;
  border-radius: 6px;
  box-shadow: none;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
`

const Button = styled.input`
  background: transparent;
  background-clip: padding-box;
  border: solid 2px #65C9FF;
  border-radius: 0.25rem;
  color: #65C9FF;
  margin: 0 auto;
  padding: ${props => (props.returnHome ? "0.5rem" : "0.5rem 3rem")};
  text-align: center;
  transition: padding 0.3s ease-in-out;
  &:hover {
    background: #65C9FF;
    color: white;
    cursor: pointer;
    padding: ${props => (props.returnHome ? "0.5rem 1rem" : "0.5rem 3.5rem")};
  }
`

const Avatar = styled.div`
  background-image: url(${avatar});
  height: 280px;
  margin: 0 auto;
  margin-top: 2rem;
  transition: background-image 0.2s ease-in-out;
  width: 260px;
  &:hover {
    background-image url(${hoverAvatar});
  }
`

const Contact = ({ location: { pathname } }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    let formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)

    const request = new Request(
      "https://getform.io/f/b413c32e-ba66-42ed-987e-4febd5e0c316"
    )
    const data = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    }

    fetch(request, data)
      .then(response => {
        window.location.replace("https://marcosarrieta.dev/success")
      })
      .catch(e => console.error(e))
  }

  return (
    <Layout location={pathname}>
      <SEO title="Contact" />
      <Avatar />
      <SectionTitle>
        Thanks for taking the time to reach out. How can I help you today?
      </SectionTitle>
      <Wrapper>
        <form onSubmit={handleSubmit} autoComplete="on">
          <FormWrapper>
            <FieldWrapper>
              <Label>Your name</Label>
              <Input
                type="text"
                name="name"
                required
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </FieldWrapper>
            <FieldWrapper last>
              <Label>Your Email</Label>
              <Input
                type="email"
                name="_replyto"
                required
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </FieldWrapper>
          </FormWrapper>
          <FieldWrapper>
            <Label>Your message</Label>
            <TextArea
              name="message"
              required
              wrap="hard"
              cols="40"
              rows="10"
              spellcheck
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
          </FieldWrapper>

          <Button type="submit" value="Submit" />
        </form>
      </Wrapper>
    </Layout>
  )
}

export default Contact
