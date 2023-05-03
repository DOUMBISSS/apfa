export default function Register (){ 


    return (
        <div className="container__login__page">
              <div className='login--content'>
                  <h2 className='login--content--header'>Créer mon compte</h2>
                      <form>
                      <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
                          <label htmlFor="floatingInput">Nom d'utilisateur</label>
                        </div>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                          <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                          <label htmlFor="floatingInput">Numero de téléphone</label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                          <label htmlFor="floatingPassword">Mot de passe </label>
                        </div>
                        <div className="form-floating ">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password"/>
                          <label htmlFor="floatingPassword">Mot de passe (confirmation)</label>
                        </div>
                          <button type="submit" className="btn__login">Inscription</button>
                      </form>
                </div>
        </div>
    )
}