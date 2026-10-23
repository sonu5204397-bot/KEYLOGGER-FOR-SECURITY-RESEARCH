import unittest

from app import app


class KeystrokeDemoAppTests(unittest.TestCase):
    def setUp(self):
        app.config.update(TESTING=True)
        self.client = app.test_client()

    def test_homepage_contains_safe_keystroke_demo(self):
        response = self.client.get("/")

        self.assertEqual(response.status_code, 200)
        self.assertIn(
            b"<h1 id=\"page-title\">KEYLOGGER FOR SECURITY RESEARCH</h1>",
            response.data,
        )
        self.assertIn(b'id="demo-input"', response.data)
        self.assertIn(b'id="start-button"', response.data)
        self.assertIn(b'id="stop-button"', response.data)
        self.assertIn(b"Do not enter passwords or sensitive information.", response.data)
        self.assertIn(b"Only keystrokes in this field are displayed below.", response.data)

    def test_homepage_sets_privacy_headers(self):
        response = self.client.get("/")

        self.assertEqual(response.headers["Cache-Control"], "no-store")
        self.assertIn("connect-src 'none'", response.headers["Content-Security-Policy"])
        self.assertEqual(response.headers["X-Content-Type-Options"], "nosniff")
        self.assertEqual(response.headers["X-Frame-Options"], "DENY")

    def test_demo_does_not_accept_submitted_keystrokes(self):
        response = self.client.post("/api/scan", json={"input": "sample"})

        self.assertEqual(response.status_code, 404)


if __name__ == "__main__":
    unittest.main()
