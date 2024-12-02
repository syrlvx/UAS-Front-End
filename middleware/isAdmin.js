const isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role === "admin") {
        return next();
    }
    res.status(403).json({ error: "Akses ditolak. Anda bukan admin." });
};

module.exports = isAdmin;
