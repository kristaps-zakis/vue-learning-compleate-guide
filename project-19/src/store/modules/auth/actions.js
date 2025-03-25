let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    })
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    })
  },

  async auth(context, payload) {
    const mode = payload.mode;
    const API_KEY = 'AIzaSyBS_1YOwPt_tFt1Lh8APCUUysNrWNdxqJg';
    let url =  `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    
    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData, 'Not OK')
      const error = new Error(responseData.message || 'Failed to signup!')
      throw error
    }

    // console.log(responseData)

    const expiresIn = +responseData.expiresIn * 1000;
    const exparationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)
    localStorage.setItem('tokenExpiration', exparationDate)

    timer = setTimeout(function() {
      context.dispatch('setAutoLogout')
    }, expiresIn)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    })
  },

  tryLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function() {
      context.dispatch('setAutoLogout')
    }, expiresIn);

    if (token && userId && tokenExpiration) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration,
      })
    }
  },

  logout(context) {

    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
     })
  }, 
  autoLogout(context) {
    context.dispatch('logout');
    context.dispatch("setAutoLogout");
  }
}
