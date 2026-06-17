import { useState, useEffect } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [tab, setTab] = useState('login')

  // LOGIN
  const [loginEmail, setLoginEmail] = useState('')
  const [loginSenha, setLoginSenha] = useState('')
  const [erroLoginEmail, setErroLoginEmail] = useState('')

  // CADASTRO
  const [cadNome, setCadNome] = useState('')
  const [cadEmail, setCadEmail] = useState('')
  const [cadSenha, setCadSenha] = useState('')
  const [cadConfirmar, setCadConfirmar] = useState('')
  const [erroConfirmar, setErroConfirmar] = useState('')
  const [erroCadEmail, setErroCadEmail] = useState('')

  // VER SENHA
  const [verLoginSenha, setVerLoginSenha] = useState(false)
  const [verCadSenha, setVerCadSenha] = useState(false)
  const [verCadConfirmar, setVerCadConfirmar] = useState(false)

  useEffect(() => {
    document.title = darkMode
      ? 'Login · Dark'
      : 'Login · Light'
  }, [darkMode])

  function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  function handleLogin() {
    setErroLoginEmail('')

    if (!validarEmail(loginEmail)) {
      setErroLoginEmail('Insira um e-mail válido.')
      return
    }

    alert('Login realizado!')
  }

  function handleCadastro() {
    setErroCadEmail('')
    setErroConfirmar('')

    if (!validarEmail(cadEmail)) {
      setErroCadEmail('Insira um e-mail válido.')
      return
    }

    if (cadSenha !== cadConfirmar) {
      setErroConfirmar('As senhas não coincidem.')
      return
    }

    alert(`Cadastro de ${cadNome} realizado!`)
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <main>
        <div className="card">

          {/* TOPO */}
          <div className="card-topo">
            <h1>
              {tab === 'login'
                ? 'Entre na sua conta'
                : 'Crie sua conta'}
            </h1>

            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />

              <span className="slider">
                <span className="switch-icon">
                  {darkMode ? "☀️" : "🌙"}
                </span>
              </span>
            </label>
          </div>

          {/* SUBTITULO */}
          <p className="subtitulo">
            {tab === 'login' ? (
              <>
                <span>Novo por aqui? </span>

                <button
                  type="button"
                  className="link-btn"
                  onClick={() => setTab('cadastrar')}
                >
                  Crie uma conta
                </button>
              </>
            ) : (
              <>
                <span>Já tem conta? </span>

                <button
                  type="button"
                  className="link-btn"
                  onClick={() => setTab('login')}
                >
                  Entre aqui
                </button>
              </>
            )}
          </p>

          {/* TABS */}
          <div className="tabs">
            <button
              type="button"
              className={tab === 'login' ? 'ativo' : ''}
              onClick={() => setTab('login')}
            >
              Entrar
            </button>

            <button
              type="button"
              className={tab === 'cadastrar' ? 'ativo' : ''}
              onClick={() => setTab('cadastrar')}
            >
              Cadastrar
            </button>
          </div>

          {/* LOGIN */}
          {tab === 'login' && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleLogin()
              }}
            >

              {/* EMAIL */}
              <div className="input-group">
                <label htmlFor="login-email">
                  Email
                </label>

                <div className="input-wrapper">
                  <span className="icon material-symbols-outlined">
                    alternate_email
                  </span>

                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Digite seu email"
                    value={loginEmail}
                    onChange={(e) => {
                      setLoginEmail(e.target.value)
                      setErroLoginEmail('')
                    }}
                  />
                </div>
              </div>

              {erroLoginEmail && (
                <p className="erro-msg">
                  {erroLoginEmail}
                </p>
              )}

              {/* SENHA */}
              <div className="input-group">
                <label htmlFor="login-senha">
                  Senha
                </label>

                <div className="input-wrapper">
                  <span className="icon material-symbols-outlined">
                    lock
                  </span>

                  <input
                    id="login-senha"
                    type={verLoginSenha ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Digite sua senha"
                    value={loginSenha}
                    onChange={(e) => setLoginSenha(e.target.value)}
                  />

                  <button
                    type="button"
                    className="btn-ver"
                    aria-label={
                      verLoginSenha
                        ? 'Ocultar senha'
                        : 'Mostrar senha'
                    }
                    onClick={() =>
                      setVerLoginSenha(!verLoginSenha)
                    }
                  >
                    <span className="material-symbols-outlined">
                      {verLoginSenha
                        ? 'visibility_off'
                        : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="row">
                <label className="lembrar">
                  <input type="checkbox" />
                  Lembrar de mim
                </label>

                <button
                  type="button"
                  className="link-btn esqueceu"
                >
                  Esqueci minha senha
                </button>
              </div>

              <button
                type="submit"
                className="btn-primary"
              >
                Entrar na conta →
              </button>
            </form>
          )}

          {/* CADASTRO */}
          {tab === 'cadastrar' && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleCadastro()
              }}
            >

              {/* NOME */}
              <div className="input-group">
                <label htmlFor="cad-nome">
                  Nome completo
                </label>

                <div className="input-wrapper">
                  <span className="icon material-symbols-outlined">
                    person
                  </span>

                  <input
                    id="cad-nome"
                    type="text"
                    placeholder="Digite seu nome"
                    value={cadNome}
                    onChange={(e) =>
                      setCadNome(e.target.value)
                    }
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="input-group">
                <label htmlFor="cad-email">
                  Email
                </label>

                <div className="input-wrapper">
                  <span className="icon material-symbols-outlined">
                    alternate_email
                  </span>

                  <input
                    id="cad-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Digite seu email"
                    value={cadEmail}
                    onChange={(e) => {
                      setCadEmail(e.target.value)
                      setErroCadEmail('')
                    }}
                  />
                </div>
              </div>

              {erroCadEmail && (
                <p className="erro-msg">
                  {erroCadEmail}
                </p>
              )}

              {/* SENHA */}
              <div className="input-group">
                <label htmlFor="cad-senha">
                  Senha
                </label>

                <div className="input-wrapper">
                  <span className="icon material-symbols-outlined">
                    lock
                  </span>

                  <input
                    id="cad-senha"
                    type={verCadSenha ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Digite sua senha"
                    value={cadSenha}
                    onChange={(e) =>
                      setCadSenha(e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="btn-ver"
                    aria-label={
                      verCadSenha
                        ? 'Ocultar senha'
                        : 'Mostrar senha'
                    }
                    onClick={() =>
                      setVerCadSenha(!verCadSenha)
                    }
                  >
                    <span className="material-symbols-outlined">
                      {verCadSenha
                        ? 'visibility_off'
                        : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* CONFIRMAR */}
              <div className="input-group">
                <label htmlFor="cad-confirmar">
                  Confirmar senha
                </label>

                <div className="input-wrapper">
                  <span className="icon material-symbols-outlined">
                    lock_reset
                  </span>

                  <input
                    id="cad-confirmar"
                    type={
                      verCadConfirmar
                        ? 'text'
                        : 'password'
                    }
                    autoComplete="new-password"
                    placeholder="Confirme sua senha"
                    value={cadConfirmar}
                    onChange={(e) => {
                      setCadConfirmar(e.target.value)
                      setErroConfirmar('')
                    }}
                  />

                  <button
                    type="button"
                    className="btn-ver"
                    aria-label={
                      verCadConfirmar
                        ? 'Ocultar senha'
                        : 'Mostrar senha'
                    }
                    onClick={() =>
                      setVerCadConfirmar(!verCadConfirmar)
                    }
                  >
                    <span className="material-symbols-outlined">
                      {verCadConfirmar
                        ? 'visibility_off'
                        : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {erroConfirmar && (
                <p className="erro-msg">
                  {erroConfirmar}
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
              >
                Criar conta →
              </button>
            </form>
          )}

        </div>
      </main>
    </div>
  )
}