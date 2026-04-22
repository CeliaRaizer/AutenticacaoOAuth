const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("./database");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {

    const email = profile.emails[0].value;
    const name = profile.displayName;
    const photo = profile.photos[0].value;
    const googleId = profile.id;

    // Restrição opcional
    // if (!email.endsWith("@ifc.edu.br")) return done(null, false);

    const [rows] = await db.query(
      "SELECT * FROM users WHERE google_id = ?",
      [googleId]
    );

    let user;

    if (rows.length === 0) {
      const [result] = await db.query(
        "INSERT INTO users (google_id, name, email, photo) VALUES (?, ?, ?, ?)",
        [googleId, name, email, photo]
      );

      user = {
        id: result.insertId,
        google_id: googleId,
        name,
        email,
        photo
      };
    } else {
      user = rows[0];
    }

    return done(null, user);
  }
  
));
